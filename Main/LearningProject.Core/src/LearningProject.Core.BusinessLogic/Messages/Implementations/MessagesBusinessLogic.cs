using LearningProject.Core.BusinessLogic.Messages.Interfaces;
using LearningProject.Core.Domain.Data;
using Microsoft.Data.Entity;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LearningProject.Core.BusinessLogic.Messages.Implementations {
    public class MessagesBusinessLogic : IMessagesBusinessLogic {

        private readonly LearningProjectContext _context;

        public MessagesBusinessLogic(LearningProjectContext learningProjectContext) {
            _context = learningProjectContext;
        }

        public async Task<IEnumerable<string>> GetLanguages() {
            //return new List<string>() { "asd", "OMG" };
            var langauges = await _context.Language.Select(x => x.CountryISOCode).ToListAsync();
            return langauges;
        }
    }
}
