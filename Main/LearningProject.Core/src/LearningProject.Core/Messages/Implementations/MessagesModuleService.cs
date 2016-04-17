using LearningProject.Core.BusinessLogic.OperationResult.Interfaces;
using LearningProject.Core.DTO.Messages;
using LearningProject.Core.Messages.Interfaces;
using LearningProject.Core.Service.Messages.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LearningProject.Core.Messages.Implementations {
    public class MessagesModuleService : IMessagesModuleService {
        private readonly IMessagesService _messagesService;
        private readonly IOperationResult _operationResult;

        public MessagesModuleService(IMessagesService messagesService, IOperationResult operationResult) {
            _messagesService = messagesService;
            _operationResult = operationResult;
        }

        public async Task<IEnumerable<LanguageDTO>> GetLanguages() {
            var languages = await _messagesService.GetLanguages();
            return languages;
        }

        public async Task<IEnumerable<TranslationDTO>> GetTranslations(byte languageID) {
            var translations = await _messagesService.GetTranslations(languageID);
            return translations;
        }
    }
}
