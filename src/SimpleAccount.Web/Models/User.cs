using System.ComponentModel.DataAnnotations;

namespace SimpleAccount.Web.Models
{
    /// <summary>
    /// User model for the view binding and validation
    /// </summary>
    public class User
    {
        /// <summary>
        /// A required email field.
        /// </summary>
        [Required]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        public string Email { get; set; }
         
        /// <summary>
        /// A required password field with minimum character validation
        /// </summary>
        [Required]
        [StringLength(8,MinimumLength = 3,ErrorMessage = "Password must be minimum 3 characters long")]
        public string Password { get; set; }
    }
}