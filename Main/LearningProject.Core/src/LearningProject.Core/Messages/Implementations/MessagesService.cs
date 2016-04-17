using LearningProject.Core.BusinessLogic.Messages.Interfaces;
using LearningProject.Core.BusinessLogic.OperationResult.Interfaces;
using LearningProject.Core.DTO.Messages;
using LearningProject.Core.Messages.Interfaces;
using LearningProject.Core.Validations.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LearningProject.Core.Messages.Implementations {
    public class MessagesService : IMessagesService {
        private readonly IOperationResult _operationResult;
        private readonly IMessageValidator _messageValidator;
        private readonly IMessagesBusinessLogic _messagesBussinessLogic;

        public MessagesService(IOperationResult operationResult, IMessageValidator messageValidator, IMessagesBusinessLogic messagesBussinessLogic) {
            _operationResult = operationResult;
            _messageValidator = messageValidator;
            _messagesBussinessLogic = messagesBussinessLogic;
        }

        public async Task<IEnumerable<LanguageDTO>> GetLanguages() {
            var languages = await _messagesBussinessLogic.GetLanguages();
            return languages;
        }

        public async Task<IEnumerable<TranslationDTO>> GetTranslations(byte languageID) {
            _messageValidator.ValidateLangauge(languageID);
            var translations = await _messagesBussinessLogic.GetTranslations(languageID);
            return translations;
        }
    }
}
