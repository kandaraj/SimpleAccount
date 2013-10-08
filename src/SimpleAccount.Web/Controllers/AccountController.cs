using System.Web.Http;
using SimpleAccount.Data;
using SimpleAccount.Web.Models;
using SimpleAccount.Web.Extenstions;

namespace SimpleAccount.Web.Controllers
{
    public class AccountController : ApiController
    {
        private readonly IUserRepository _repository;


        ///TODO: Use Ninject to avoid multiple constructor
        public AccountController()
            :this(new UserRepository())
        {  }


        /// <summary>
        /// Constructor that takes IUserRepository as parameter
        /// </summary>
        /// <param name="repository">IUserRepository to inject</param>
        public AccountController(IUserRepository repository)
        {
            _repository = repository;
        }
 

        /// <summary>
        /// Adds User to repository
        /// </summary>
        /// <param name="user">User details</param>
        /// <returns>Message to indicate if the action is successful or failure with error message</returns>
        [System.Web.Mvc.HttpPost]
        public Message Post(User user)
        {
            if (ModelState.IsValid)
            {
                var email = user.Email.ToLower();

                if (!_repository.IsUserExists(email) && _repository.AddUser(email, user.Password))                   
                    return new Message();
    
                ModelState.AddModelError(string.Empty, "Email already exists");
            }

            return new Message {HasError = true, Errors = ModelState.Errors()};
        }
    }
}
