using System;

namespace LearningProject.Core.Shared.OperationResult.Implementations {
    public class OperationResultException : Exception {
        public OperationResultException() {
        }

        public OperationResultException(string message) : base(message) {
        }

        public OperationResultException(string message, Exception inner) : base(message, inner) {
        }
    }
}
