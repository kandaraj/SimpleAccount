using System.Collections.Generic;

namespace SimpleAccount.Data
{
    /// <summary>
    /// A simple data class to hold data for demo purpose
    /// </summary>
    internal class UserData : IUser
    {
        /// <summary>
        /// Gets current list of users email.
        /// </summary>
        public UserData()
        {
            Emails = new List<string> {"test@gmail.com", "simple@gmail.com"};
        }
         

        public List<string> Emails { get; set; }
    }
}