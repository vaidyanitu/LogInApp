using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace LogInApp.Server.Services.Email
{
    public class FileMessageService:IMessageService
    {
        async Task IMessageService.Send(string email, string subjects, string message)
        {
            var ownKey = System.IO.File.ReadAllLines(@"..\LogInApp\Server\Services\Email\sendgrid.txt");
             var apiKey = ownKey[0];

            var client = new SendGridClient(apiKey);
            var from = new EmailAddress("nitu.vaidya@spi.com", "Nitu");
            var subject = subjects;
            var to = new EmailAddress(email);
            var plainTextContent = message;
            var htmlContent = message;
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
            var response = await client.SendEmailAsync(msg);         
        }

        

    }
}
