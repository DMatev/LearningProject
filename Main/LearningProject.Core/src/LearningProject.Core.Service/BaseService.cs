using LearningProject.Core.Shared.OperationResult.Interfaces;

namespace LearningProject.Core.Service {
    public class BaseService {
        public IOperationResult OperationResult;

        public BaseService(IOperationResult operationResult) {
            OperationResult = operationResult;
        }
    }
}
