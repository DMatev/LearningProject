using LearningProject.Core.Messages.Interfaces;
using LearningProject.Core.Service.Messages.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LearningProject.Core.Messages.Implementations {
    public class MessagesModuleService : IMessagesModuleService {
        private readonly IMessagesService _messagesService;

        public MessagesModuleService(IMessagesService messagesService) {
            _messagesService = messagesService;
        }

        public async Task<IEnumerable<string>> GetLanguages() {
            return await _messagesService.GetLanguages();
        }
    }
}
