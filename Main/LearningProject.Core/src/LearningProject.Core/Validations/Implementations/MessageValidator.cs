using LearningProject.Core.Abstraction.Enums;
using LearningProject.Core.BusinessLogic.OperationResult.Interfaces;
using LearningProject.Core.Validations.Interfaces;

namespace LearningProject.Core.Validations.Implementations {
    public class MessageValidator : IMessageValidator {
        private readonly IOperationResult _operationResult;

        public MessageValidator(IOperationResult operationResult) {
            _operationResult = operationResult;
        }

        public void ValidateLangauge(byte languageID) {
            if(languageID != 1 && languageID != 2) {
                _operationResult.AddError(MessageCodes.MissingLangauge);
            }
        }
    }
}
