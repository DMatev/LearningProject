using LearningProject.Core.BusinessLogic.Messages.Interfaces;
using LearningProject.Core.Domain.Data;
using LearningProject.Core.DTO.Messages;
using LearningProject.Core.Shared.OperationResult.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LearningProject.Core.BusinessLogic.Messages.Implementations {
    public class MessagesBusinessLogic : BaseBusinessLogic, IMessagesBusinessLogic {

        private readonly LearningProjectContext _context;

        public MessagesBusinessLogic(IOperationResult operationResult, LearningProjectContext learningProjectContext) : base(operationResult) {
            _context = learningProjectContext;
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
