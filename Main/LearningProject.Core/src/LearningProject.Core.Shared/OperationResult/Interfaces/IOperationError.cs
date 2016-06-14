
namespace LearningProject.Core.Shared.OperationResult.Interfaces {
    public interface IOperationError {
        string MessageCode { get; set; }
        string[] MessageParams { get; set; }
    }
}
