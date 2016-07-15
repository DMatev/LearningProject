using LearningProject.Core.DTO.Messages;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LearningProject.Core.Service.Messages.Interfaces
{
    public interface IMessagesService
    {
        Task<IEnumerable<LanguageDTO>> GetLanguagesAsync();
        Task<IEnumerable<TranslationDTO>> GetTranslationsAsync(byte languageID);
    }
}
