using LearningProject.Core.Shared.OperationResult.Interfaces;

namespace LearningProject.Core.BusinessLogic {
    public class BaseBusinessLogic {
        public IOperationResult OperationResult;

        public BaseBusinessLogic(IOperationResult operationResult) {
            OperationResult = operationResult;
        }
    }
}
