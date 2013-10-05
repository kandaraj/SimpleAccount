namespace SimpleAccount.Data
{
    public interface IUserRepository
    {
        bool IsUserExists(string email);
        IUser GetUsers();
        bool AddUser(string email, string password);
    }
}
