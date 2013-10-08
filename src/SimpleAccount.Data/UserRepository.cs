using System.Linq;

namespace SimpleAccount.Data
{
    public class UserRepository : IUserRepository
    {
        private static UserData _instance ;

        /// <summary>
        /// Returns single instance of userdata 
        /// </summary>
        private static UserData Instance
        {
            get { return _instance ?? (_instance = new UserData()); }
        } 

        
        public bool IsUserExists(string email)
        {
            email = email.ToLower();
            return Instance.Emails.Any(_ => _.Equals(email));
        }


        
        public IUser GetUsers()
        {
            return new UserData();
        }


        public bool AddUser(string email, string password)
        {
            if (!IsUserExists(email))
            {
                Instance.Emails.Add(email);
                return true;
            }
            return false;
        }
    }
}
