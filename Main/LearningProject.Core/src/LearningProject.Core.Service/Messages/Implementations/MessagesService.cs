using LearningProject.Core.BusinessLogic.Messages.Interfaces;
using LearningProject.Core.DTO.Messages;
using LearningProject.Core.Service.Messages.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LearningProject.Core.Service.Messages.Implementations {
    public class MessagesService : IMessagesService {

        private readonly IMessagesBusinessLogic _messagesBussinessLogic;

        public MessagesService(IMessagesBusinessLogic messagesBussinessLogic) {
            _messagesBussinessLogic = messagesBussinessLogic;
        }

        public async Task<IEnumerable<LanguageDTO>> GetLanguages() {
            var languages = await _messagesBussinessLogic.GetLanguages();
            return languages;
        }

        public async Task<IEnumerable<TranslationDTO>> GetTranslations(byte languageID) {
            var translations = await _messagesBussinessLogic.GetTranslations(languageID);
            return translations;
        }
    }
}
