using System.Collections.Generic;

namespace SimpleAccount.Data
{
    /// <summary>
    /// Interface to hold user email
    /// </summary>
    public interface IUser
    {
        /// <summary>
        /// List of emails of current user list
        /// </summary>
        List<string> Emails { get; set; }
    }
}