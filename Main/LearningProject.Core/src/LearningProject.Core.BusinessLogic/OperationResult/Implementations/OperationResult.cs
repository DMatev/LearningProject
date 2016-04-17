using LearningProject.Core.BusinessLogic.OperationResult.Interfaces;
using System.Collections.Generic;

namespace LearningProject.Core.BusinessLogic.OperationResult.Implementations {
    public class OperationResult : IOperationResult {
        private List<OperationError> errors = new List<OperationError>();

        public List<OperationError> Errors {
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

        public void AddError(string messageCode, bool throwException = true) {
            errors.Add(new OperationError(messageCode));
            if (throwException) {
                throw new OperationResultException();
            }
        }
    }
}
