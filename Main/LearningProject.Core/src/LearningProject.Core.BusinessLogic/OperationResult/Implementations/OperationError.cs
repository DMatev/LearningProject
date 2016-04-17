
namespace LearningProject.Core.BusinessLogic.OperationResult.Implementations {
    public class OperationError {
        public string MessageCode { get; set; }
        public string[] MessageParams { get; set; }

        public OperationError(string messageCode, string[] messageParams = null) {
            MessageCode = messageCode;
            MessageParams = messageParams;
        }
    }
}
