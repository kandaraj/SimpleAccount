using System.Collections;

namespace SimpleAccount.Web.Controllers
{
    /// <summary>
    /// A message model to return errors as response
    /// </summary>
    public class Message
    {
        //TODO: Remove this property - To check if Error exists, end user simply can check if 'IEnumerable Errors propery' is null or count
        /// <summary>
        /// Indicates whether message has errors
        /// </summary>
        public bool HasError { get; set; }

        /// <summary>
        /// List of errors
        /// </summary>
        public IEnumerable Errors { get; set; }
    }
}