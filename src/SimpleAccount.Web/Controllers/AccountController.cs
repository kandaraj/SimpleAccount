using System.Collections;
using System.Web.Http;
using SimpleAccount.Data;
using SimpleAccount.Web.Models;
using SimpleAccount.Web.Extenstions;

namespace SimpleAccount.Web.Controllers
{
    public class AccountController : ApiController
    {
        private readonly IUserRepository _repository;

        public AccountController()
            :this(new UserRepository())
        {  }

        public AccountController(IUserRepository repository)
        {
            _repository = repository;
        }
 
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

    public class Message
    {
        public bool HasError { get; set; }
        public IEnumerable Errors { get; set; }
    }
}
