using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webApi.Models
{
    public class Contact
    {
        public int ContactID { get; set; }

        public string? ContactName { get; set; }

        public string? ContactEmail { get; set; }

        public string? ContactSubject { get; set; }

        public string? ContactMessage { get; set; }

        public string? ContactDate { get; set; }


   
    }
}
