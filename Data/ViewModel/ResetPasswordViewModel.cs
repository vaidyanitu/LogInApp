using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LogInApp.Data.ViewModel
{
    public class ResetPasswordViewModel
    {
        public string Id { get; set; }
        public string password { get; set; }
        public string repassword { get; set; }
        public string token { get; set; }
    }
}
