using LearningProject.Core.Shared.OperationResult.Interfaces;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc;
using LearningProject.Core.Abstraction.Enums;

namespace LearningProject.Core.WebApp.Helpers.OperationResult {
    public class OperationErrorHandler : IExceptionFilter {
        private readonly IOperationResult _operationResult;

        public OperationErrorHandler(IOperationResult operationResult) {
            _operationResult = operationResult;
        }

        public void OnException(ExceptionContext context) {
            if (!_operationResult.HasErrors) {
                _operationResult.AddError(MessageCodes.Error, null, false);
            }
            context.Result = new ObjectResult(_operationResult.Errors);
            context.HttpContext.Response.StatusCode = 400;
        }
    }
}
