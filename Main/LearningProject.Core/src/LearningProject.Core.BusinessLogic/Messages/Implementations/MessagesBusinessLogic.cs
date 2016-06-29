using LearningProject.Core.BusinessLogic.Messages.Interfaces;
using LearningProject.Core.DTO.Messages;
using LearningProject.Core.Shared.OperationResult.Interfaces;
using LearningProject.Core.Repository.Language.Interfaces;
using LearningProject.Core.Repository.Translation.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LearningProject.Core.BusinessLogic.Messages.Implementations
{
    public class MessagesBusinessLogic : BaseBusinessLogic, IMessagesBusinessLogic
    {

        private readonly ILanguageRepository _languageRepository;
        private readonly ITranslationRepository _translationRepository;

        public MessagesBusinessLogic(IOperationResult operationResult, ILanguageRepository languageRepository, ITranslationRepository translationRepository) : base(operationResult)
        {
            _languageRepository = languageRepository;
            _translationRepository = translationRepository;
        }

        public async Task<IEnumerable<LanguageDTO>> GetLanguagesAsync()
        {
            var langauges = await _languageRepository.RetrieveLanguagesAsync();
            var mappedLanguages = langauges.Select(x => new LanguageDTO
            {
                LanguageID = x.LanguageID,
                CountryISOCode = x.CountryISOCode
            });

            return mappedLanguages;
        }

        public async Task<IEnumerable<TranslationDTO>> GetTranslationsAsync(byte languageID)
        {
            var translations = await _translationRepository.RetrieveTranslationsAsync(t => t.LanguageID == languageID);
            var mappedTranslations = translations.Select(x => new TranslationDTO {
                MessageCode = x.MessageCode,
                Content = x.Content,
                LanguageID = x.LanguageID,
            });

            return mappedTranslations;
        }

    }
}
