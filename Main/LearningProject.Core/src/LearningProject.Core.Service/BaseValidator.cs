using LearningProject.Core.Shared.OperationResult.Interfaces;

namespace LearningProject.Core.Service {
    public class BaseValidator {
        public IOperationResult OperationResult;

        public BaseValidator(IOperationResult operationResult) {
            OperationResult = operationResult;
        }
    }
}
