using LearningProject.Core.BusinessLogic.OperationResult.Implementations;
using System.Collections.Generic;

namespace LearningProject.Core.BusinessLogic.OperationResult.Interfaces {
    public interface IOperationResult {
        bool HasErrors { get; }
        List<OperationError> Errors { get; }
        void ClearErrors();
        void AddError(string messageCode, string[] messageParams = null, bool throwException = true);
    }
}
