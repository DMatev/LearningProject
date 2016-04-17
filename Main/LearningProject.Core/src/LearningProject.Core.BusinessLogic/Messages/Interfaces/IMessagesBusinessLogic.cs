using LearningProject.Core.DTO.Messages;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LearningProject.Core.BusinessLogic.Messages.Interfaces {
    public interface IMessagesBusinessLogic {
        Task<IEnumerable<LanguageDTO>> GetLanguages();
        Task<IEnumerable<TranslationDTO>> GetTranslations(byte languageID);
    }
}
