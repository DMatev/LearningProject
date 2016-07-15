using System.Collections.Generic;

namespace LearningProject.Core.Shared.OperationResult.Interfaces
{
    public interface IOperationResult
    {
        bool HasErrors { get; }
        List<IOperationError> Errors { get; }
        void ClearErrors();
        void AddError(string messageCode, string[] messageParams = null, bool throwException = true);
    }
}
