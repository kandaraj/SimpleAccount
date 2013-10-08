namespace SimpleAccount.Data
{

    /// <summary>
    /// Interface for User repository
    /// </summary>
    public interface IUserRepository
    {
        /// <summary>
        /// Checks if user email exists
        /// </summary>
        /// <param name="email">Email to check</param>
        /// <returns>Returns true if the email already exists in userdata</returns>
        bool IsUserExists(string email);

        /// <summary>
        /// Get list of user data
        /// </summary>
        /// <returns>IUser data</returns>
        IUser GetUsers();


        /// <summary>
        /// Adds user to userdata. 
        /// </summary>
        /// <param name="email">Email to add</param>
        /// <param name="password">Password for the user</param>
        /// <returns>Returns true if successfully added</returns>
        bool AddUser(string email, string password);
    }
}
