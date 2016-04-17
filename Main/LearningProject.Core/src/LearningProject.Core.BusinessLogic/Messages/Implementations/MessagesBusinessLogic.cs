using LearningProject.Core.BusinessLogic.Messages.Interfaces;
using LearningProject.Core.BusinessLogic.OperationResult.Interfaces;
using LearningProject.Core.Domain.Data;
using LearningProject.Core.DTO.Messages;
using Microsoft.Data.Entity;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LearningProject.Core.BusinessLogic.Messages.Implementations {
    public class MessagesBusinessLogic : IMessagesBusinessLogic {

        private readonly LearningProjectContext _context;
        private readonly IOperationResult _operationResult;

        public MessagesBusinessLogic(LearningProjectContext learningProjectContext, IOperationResult operationResult) {
            _context = learningProjectContext;
            _operationResult = operationResult;
        }

        public async Task<IEnumerable<LanguageDTO>> GetLanguages() {
            var langauges = await _context.Language.Select(x => new LanguageDTO {
                LanguageID = x.LanguageID,
                CountryISOCode = x.CountryISOCode,
            }).ToListAsync();
            return langauges;
        }

        public async Task<IEnumerable<TranslationDTO>> GetTranslations(byte languageID) {
            var translations = await _context.Translation.Where(x => x.LanguageID == languageID)
                .Select(x => new TranslationDTO {
                    MessageCode = x.MessageCode,
                    Content = x.Content,
                    LanguageID = x.LanguageID,
                })
                .ToListAsync();
            return translations;
        }
    }
}
