using LearningProject.Core.Shared.OperationResult.Interfaces;
using LearningProject.Core.WebApp.Helpers.OperationResult;
using Microsoft.AspNetCore.Mvc;

namespace LearningProject.Core.WebApp.Helpers
{
    [ServiceFilter(typeof(OperationErrorHandler))]
    public class BaseController : Controller
    {
        public IOperationResult OperationResult;

        public BaseController(IOperationResult operationResult)
        {
            OperationResult = operationResult;
        }
    }
}
