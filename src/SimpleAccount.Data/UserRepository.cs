using System.Collections.Generic;
using System.Linq;

namespace SimpleAccount.Data
{
    public class UserRepository : IUserRepository
    {
        readonly UserData _data = new UserData();

        public bool IsUserExists(string email)
        {
            email = email.ToLower();
            return _data.Emails.Any(_ => _.Equals(email));
        }

        public IUser GetUsers()
        {
            return new UserData();
        }

    }

    internal class UserData : IUser
    {
        public UserData()
        {
            Emails = new List<string>();
            Emails.Add("test@gmail.com");
            Emails.Add("simple@gmail.com");
        }
         
        public List<string> Emails { get; set; }
    }
}
