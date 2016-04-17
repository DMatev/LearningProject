using LearningProject.Core.BusinessLogic.Messages.Interfaces;
using LearningProject.Core.BusinessLogic.OperationResult.Interfaces;
using LearningProject.Core.Domain.Data;
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

        public async Task<IEnumerable<string>> GetLanguages() {
            var langauges = await _context.Language.Select(x => x.CountryISOCode).ToListAsync();
            return langauges;
        }
    }
}
