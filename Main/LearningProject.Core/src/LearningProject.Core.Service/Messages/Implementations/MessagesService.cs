using LearningProject.Core.BusinessLogic.Messages.Interfaces;
using LearningProject.Core.DTO.Messages;
using LearningProject.Core.Service.Messages.Interfaces;
using LearningProject.Core.Service.Validations.Interfaces;
using LearningProject.Core.Shared.OperationResult.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LearningProject.Core.Service.Messages.Implementations
{
    public class MessagesService : BaseService, IMessagesService {
        private readonly IMessageValidator _messageValidator;
        private readonly IMessagesBusinessLogic _messagesBussinessLogic;

        public MessagesService(IOperationResult operationResult, IMessageValidator messageValidator, IMessagesBusinessLogic messagesBussinessLogic) : base(operationResult){
            _messageValidator = messageValidator;
            _messagesBussinessLogic = messagesBussinessLogic;
        }

        public async Task<IEnumerable<LanguageDTO>> GetLanguagesAsync() {
            var languages = await _messagesBussinessLogic.GetLanguagesAsync();
            return languages;
        }

        public async Task<IEnumerable<TranslationDTO>> GetTranslationsAsync(byte languageID) {
            _messageValidator.ValidateLangauge(languageID);
            var translations = await _messagesBussinessLogic.GetTranslationsAsync(languageID);
            return translations;
        }
    }
}
