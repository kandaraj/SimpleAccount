using System.Collections.Generic;

namespace SimpleAccount.Data
{
    public interface IUser
    {
        List<string> Emails { get; set; }
    }
}