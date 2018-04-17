using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using LogInApp.Server.Services;
using LogInApp.Server.Helpers;
using Microsoft.Extensions.Options;
using LogInApp.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using LogInApp.Server.Entities;
using LogInApp.Server.Services.Email;
using Microsoft.AspNetCore.Identity;
using Microsoft.Azure.KeyVault.Models;
using LogInApp.Data.ViewModel;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net;

namespace LogInApp.Controllers
{
    [Produces("application/json")]
    [Route("api/Users")]
    public class UsersController : Controller
    {
        private IUserService _userService;
        private IMapper _mapper;
        private readonly AppSettings _appSettings;
        private readonly IMessageService _messageService;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public UsersController(
            IUserService userService,
            IMapper mapper,
            IOptions<AppSettings> appSettings,
            IMessageService messageService,
            UserManager<User> userManager,
            SignInManager<User> signInManager
            )
        {
            _userService = userService;
            _mapper = mapper;
            _appSettings = appSettings.Value;
            _messageService = messageService;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [AllowAnonymous]
        [Route("authenticate")]
        [HttpPost]
        public async Task<IActionResult> Authenticate([FromBody]UserDto userDto)
        {
            var loginUser = await _userManager.FindByNameAsync(userDto.Username);
            if (loginUser == null)
                return BadRequest("Username or Password is incorrect");
            var result = await _signInManager.CheckPasswordSignInAsync(loginUser, userDto.Password, lockoutOnFailure: false);
            if (!result.Succeeded)
                return BadRequest("Username or Password is incorrect");
            else
                loginUser = await _userManager.FindByNameAsync(userDto.Username);
            if (!loginUser.EmailConfirmed)
                return BadRequest("Confirm your email first");

        //    var tokenHandler = new JwtSecurityTokenHandler();
        //var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
        //var tokenDescriptor = new SecurityTokenDescriptor
        //{
        //    Subject = new ClaimsIdentity(new Claim[]
        //    {
        //            new Claim(ClaimTypes.Name,loginUser.UserId.ToString())
        //    }),
        //    Expires = DateTime.UtcNow.AddDays(7),
        //    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        //};
        //var token = tokenHandler.CreateToken(tokenDescriptor);
        //var tokenString = tokenHandler.WriteToken(token);



        var tokenString = IssueJwtToken(loginUser.Id);
            return Ok(new
            {
                Id = loginUser.UserId,
                Username = loginUser.UserName,
                FirstName = loginUser.FirstName,
                LastName = loginUser.LastName,
                Token = tokenString
            });
        }

    [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Register([FromBody]UserDto userDto)
        {
            if (userDto.Password != userDto.ConfirmPassword)
            {
                ModelState.AddModelError(string.Empty, "Passwords don't match");
                return BadRequest("Passwords don't match");
            }
            var user = _mapper.Map<User>(userDto);
            try
            {
                var newUser = _userService.Create(user, userDto.Password);
                var result = await _userManager.CreateAsync(newUser, userDto.Password);
                if (result.Succeeded)
                {
                    user = await _userManager.FindByEmailAsync(userDto.Email);                    
                    await _userManager.AddToRoleAsync(user, "User");

                    var emailConfirmationToken = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                    emailConfirmationToken = System.Web.HttpUtility.UrlEncode(emailConfirmationToken);
                    var tokenVerificationUrl = Url.Action("VerifyEmail", "users", new { id = user.UserId, token = emailConfirmationToken }, Request.Scheme);

                    await _messageService.Send(user.Email, "Verify your email", $"Click <a href=\"{tokenVerificationUrl}\">here</a> to verify your email");

                    return Ok("Check your email for a verification link");
                }
                else
                {
                    return BadRequest(result.Errors.Select(error => error.Description).Aggregate((allErrors, error) => allErrors += ", " + error));
                }                           
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var users = _userService.GetAll();
            List<UserDto> userDtos = new List<UserDto>();           // var userDtos = _mapper.Map<IList<UserDto>>(users);
           foreach( var user in users)
            {
                var usdto = new UserDto();
                usdto.FirstName = user.FirstName;
                usdto.LastName = user.LastName;
                usdto.Id = user.UserId;
                usdto.Password = user.PasswordHash;
                usdto.Username = user.UserName;
                userDtos.Add(usdto);
            }
            return Ok(userDtos);
        }

        [Authorize]
        [HttpGet]
        [Route("GetUser")]
        public IActionResult GetUserByUserName(string username)
        {
            var user = _userService.GetUserByUserName(username);
            if (user == null)
            {
                return BadRequest("User does not exist");
            }
            else
            {
                var userDto = new UserDto();
                
                return Ok(user);
            }
        }


        [Authorize]
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody]UserDto userDto)
        {
            //var user = _userService.GetById(id);
            //if (user == null)
            //{
            //    return NotFound();
            //}
            //user.FirstName = userDto.FirstName;
            //user.LastName = userDto.LastName;
            //user.UserName = userDto.Username;
            var user = _mapper.Map<User>(userDto);
            user.UserId = id;
            try
            {
                _userService.Update(user, userDto.Password);
                return Ok();
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Authorize]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _userService.Delete(id);
            return Ok();
        }

        [HttpGet]
        [Route("VerifyEmail")]
        public async Task<ContentResult> VerifyEmail(int id, string token)
        {
            var result = new ContentResult
            {
                ContentType = "text/html",
                StatusCode = (int)HttpStatusCode.OK,
                Content = "Verified"
            };
            var response = new HttpResponseMessage();
            var confirmToken = System.Web.HttpUtility.UrlDecode(token);
            var user= _userService.GetById(id);
            if (user == null)
            {
                result.Content = "Invalid request";
                return result;
            }
            var emailConfirmationResult =await _userManager.ConfirmEmailAsync(user, confirmToken);
            if (!emailConfirmationResult.Succeeded)
            {
                result.Content = "Invalid request";
                return result;
            }
                var url = "http://localhost:4200/login";
            result.Content = "Email Confirmed! Click <a href=" + url + ">here</a> to log in to your account.";
            return result;
        }

        [HttpPost]
        [Route("forgotPassword/{email}")]
        public async Task<IActionResult> ForgotPassword(string email)
        {
            var user = await _userManager.FindByEmailAsync(email);
            if (user == null)
                return BadRequest();

            var passwordResetToken = await _userManager.GeneratePasswordResetTokenAsync(user);
            passwordResetToken = System.Web.HttpUtility.UrlEncode(passwordResetToken);
            //var passwordResetUrl = Url.Action("ResetPassword", "Users", new { id = user.Id, token = passwordResetToken }, Request.Scheme);
            var passwordResetUrl = "http://localhost:4200/resetpassword";
            await _messageService.Send(email, "Password Reset", $"Click <a href=\"" + passwordResetUrl + "\">here</a>to reset your password");
            var resp = new List<string>();
            resp.Add("Check your email for a password reset link");
            resp.Add(user.Id);
            resp.Add(passwordResetToken);
            return Ok(resp );
        }

        [HttpPost]
        [Route("resetPassword")]
        public async Task<IActionResult> ResetPassword([FromBody]ResetPasswordViewModel model)
        {
            var id = model.Id;
            var token = System.Web.HttpUtility.UrlDecode(model.token);
            var password = model.password;
            var repassword = model.repassword;
            if (id == null)
                return BadRequest("Invalid Request");
            var user = await _userManager.FindByIdAsync(id);
            if (user == null)
                return BadRequest("User does not exist");
            if(password!=repassword)
            {
                ModelState.AddModelError(string.Empty, "Passwords do not match");
                return BadRequest("Passwords do not match");
            }
            var resetPasswordResult = await _userManager.ResetPasswordAsync(user, token, password);
            if (!resetPasswordResult.Succeeded)
            {
                return BadRequest(resetPasswordResult.Errors.Select(error => error.Description).Aggregate((allErrors, error) => allErrors += ", " + error));         
            }
            return Ok("Password updated");
        }

        [HttpPost]
        [Route("logout")]
        public async Task<IActionResult> logout()
        {
            await  _signInManager.SignOutAsync();
            return Ok();
        }

        [HttpPost]
        [Route("issueToken")]
        public async Task<IActionResult> ReturnJwtToken(string UserId)
        {
            var jwtToken = IssueJwtToken(UserId).ToString();
            return Ok(new { token = jwtToken });
        }


        public string IssueJwtToken(string UserId)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name,UserId.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);
            return tokenString;
        }


        
    }
}