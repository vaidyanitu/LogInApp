using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using LogInApp.Data;
using LogInApp.Server.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LogInApp.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/Blogs")]
    public class BlogsController : Controller
    {
        private IHostingEnvironment _hostingEnvironment;
        private ApplicationDbContext _context;

        public BlogsController(IHostingEnvironment hostingEnvironment,ApplicationDbContext context)
        {
            _hostingEnvironment = hostingEnvironment;
            _context = context;
        }

        [HttpPost]
        [Route("CreateBlog")]
        public IActionResult CreateBlog(Blog blog)
        {           
            try
            {
                var data = blog;
                var file = Request.Form.Files[0];
                string folderName = "Client\\src\\assets\\images";
                string webRootPath = _hostingEnvironment.ContentRootPath;
                string newPath = Path.Combine(webRootPath, folderName);
                if (!Directory.Exists(newPath))
                {
                    Directory.CreateDirectory(newPath);
                }
                if (file.Length > 0)
                {
                    string fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    string fullPath = Path.Combine(newPath, fileName);
                    blog.FilePath = fullPath;
                    using(var stream= new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                }
                _context.Blog.Add(data);
                _context.SaveChanges();
                return Ok("Blog Created");
            }
            catch(System.Exception ex)
            {
                return Json("Upload Failed " + ex.Message);
            }

        }

       [HttpGet]
       [Route("GetBlogs")]
       public IActionResult GetBlogs()
        {
            var blogs = _context.Blog.ToList();
            
            return Ok(_context.Blog.ToList());
        }

        [HttpGet]
        [Route("GetBlogById")]
        public IActionResult GetBlogById(int id)
        {
            var blog = _context.Blog.Where(x=>x.BlogId==id).FirstOrDefault();
            return Ok(blog);
        }

    }
}
