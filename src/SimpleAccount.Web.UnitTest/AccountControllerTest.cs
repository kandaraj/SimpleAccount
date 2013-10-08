using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using SimpleAccount.Data;
using SimpleAccount.Web.Controllers;
using SimpleAccount.Web.Models;
using Faker;

namespace SimpleAccount.Web.UnitTest
{
    [TestClass]
    public class AccountControllerTest
    {
        /// <summary>
        /// Test to make sure the user is not added when the model has error
        /// </summary>
        [TestMethod]
        public void invalid_user_model_not_added()
        {
            var accountController = new AccountController();
            accountController.ModelState.AddModelError(string.Empty, "Invalid email");
            var message = accountController.Post(new User());
            Assert.IsTrue(message.HasError);
        }

        /// <summary>
        /// Test to make sure the user is added when model state is clear
        /// </summary>
        [TestMethod]
        public void valid_user_model_added()
        {
            var email = Internet.Email();
            var moqUserRepo = new Mock<IUserRepository>();
            moqUserRepo.Setup(_ => _.IsUserExists(email)).Returns(false);
            moqUserRepo.Setup(_ => _.AddUser(email, It.IsAny<string>())).Returns(true);

            var accountController = new AccountController(moqUserRepo.Object);
            var message = accountController.Post(new User{ Email = email,Password = Lorem.GetFirstWord()});
           
            Assert.IsFalse(message.HasError);
        }

         /// <summary>
         /// Test to make sure that user is added when passing case sensitive email data
         /// </summary>
        [TestMethod]
        public void user_already_exists_in_database_case_sensitive()
        {
            var email = Internet.Email();
            var moqUserRepo = new Mock<IUserRepository>();
            moqUserRepo.Setup(_ => _.IsUserExists(email)).Returns(true);

            var accountController = new AccountController(moqUserRepo.Object);
            var message = accountController.Post(new User { Email = email.ToUpper(), Password = Lorem.GetFirstWord() });

            Assert.IsTrue(message.HasError);
        }
    }
}