using System;

namespace LearningProject.Core.BusinessLogic.OperationResult.Implementations {
    public class OperationResultException : Exception {
        public OperationResultException() {
        }

        public OperationResultException(string message) : base(message) {
        }

        public OperationResultException(string message, Exception inner) : base(message, inner) {
        }
    }
}
