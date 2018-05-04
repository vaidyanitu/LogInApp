using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LogInApp.Server.Entities
{
    public class Tag
    {
        public int TagId { get; set; }
        [Display(Name ="Tag")]
        public string TagName { get; set; }
    }
}
