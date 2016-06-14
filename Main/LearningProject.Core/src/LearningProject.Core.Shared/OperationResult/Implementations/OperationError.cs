using LearningProject.Core.Shared.OperationResult.Interfaces;

namespace LearningProject.Core.Shared.OperationResult.Implementations {
    public class OperationError : IOperationError {
        public string MessageCode { get; set; }
        public string[] MessageParams { get; set; }

        public OperationError(string messageCode, string[] messageParams = null) {
            MessageCode = messageCode;
            MessageParams = messageParams;
        }
    }
}
