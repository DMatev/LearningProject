using LearningProject.Core.Shared.OperationResult.Interfaces;
using System.Collections.Generic;

namespace LearningProject.Core.Shared.OperationResult.Implementations {
    public class OperationResult : IOperationResult {
        private List<IOperationError> errors = new List<IOperationError>();

        public List<IOperationError> Errors {
            get {
                return errors;
            }
        }

        public bool HasErrors {
            get {
                if (errors.Count > 0) {
                    return true;
                }
                return false;
            }
        }

        public void ClearErrors() {
            errors.Clear();
        }

        public void AddError(string messageCode, string[] messageParams = null, bool throwException = true) {
            errors.Add(new OperationError(messageCode, messageParams));
            if (throwException) {
                throw new OperationResultException();
            }
        }
    }
}
