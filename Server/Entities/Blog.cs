using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LogInApp.Server.Entities
{
    public class Blog
    {
        public int BlogId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string AuthorId  { get; set; }
        public List<Tag> Tags { get; set; }
        public string FileName { get; set; }
        public string FilePath { get; set; }
    }
}
