using Microsoft.VisualStudio.TestTools.UnitTesting;
using SimpleAccount.Web.Controllers;
using SimpleAccount.Web.Models;

namespace SimpleAccount.Web.UnitTest
{
    [TestClass]
    public class AccountControllerTest
    {
        [TestMethod]
        public void invalid_user_model_not_added()
        {
            var accountController = new AccountController();
            accountController.ModelState.AddModelError(string.Empty, "Invalid email");
            var hasErrors = accountController.Post(new User());
            Assert.IsNotNull(hasErrors);
        }

        [TestMethod]
        public void valid_user_model_not_added()
        {
            var accountController = new AccountController();
            var hasError = accountController.Post(new User());
            Assert.IsNull(hasError);
        }
    }
}