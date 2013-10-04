using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SimpleAccount.Web.Models
{
    public class User
    {

        [Required]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        public string Email { get; set; }
         
        [Required]
        [StringLength(8,MinimumLength = 3,ErrorMessage = "Password must be minimum 3 characters long")]
        public string Password { get; set; }
    }
}