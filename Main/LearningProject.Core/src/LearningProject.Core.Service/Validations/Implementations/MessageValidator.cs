using LearningProject.Core.Abstraction.Enums;
using LearningProject.Core.Service.Validations.Interfaces;
using LearningProject.Core.Shared.OperationResult.Interfaces;

namespace LearningProject.Core.Service.Validations.Implementations
{
    public class MessageValidator : BaseValidator, IMessageValidator
    {

        public MessageValidator(IOperationResult operationResult) : base(operationResult)
        {
        }

        public void ValidateLangauge(byte languageID)
        {
            if (languageID != 1 && languageID != 2)
            {
                OperationResult.AddError(MessageCodes.MissingLangauge);
            }
        }
    }
}
