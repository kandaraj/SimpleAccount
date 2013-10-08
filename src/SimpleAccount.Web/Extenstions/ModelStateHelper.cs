using System.Collections;
using System.Linq;
using System.Web.Http.ModelBinding;

namespace SimpleAccount.Web.Extenstions
{ 
    public static class ModelStateHelper
    {
        // SOURCE: Google :)

        /// <summary>
        /// Helper to simplify model state error message for easier reading
        /// </summary>
        /// <param name="modelState">Model state to simplify the errors</param>
        /// <returns>Array of errors</returns>
        public static IEnumerable Errors(this ModelStateDictionary modelState)
        {
            if (!modelState.IsValid)
            {
                return modelState.ToDictionary(kvp => kvp.Key,
                    kvp => kvp.Value.Errors
                                    .Select(e => e.ErrorMessage).ToArray())
                                    .Where(m => m.Value.Any());
            }
            return null;
        }
    }
}