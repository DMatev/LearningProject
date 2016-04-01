using LearningProject.Core.BusinessLogic.Messages.Interfaces;
using LearningProject.Core.Service.Messages.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LearningProject.Core.Service.Messages.Implementations {
    public class MessagesService : IMessagesService {

        private readonly IMessagesBusinessLogic _messagesBussinessLogic;

        public MessagesService(IMessagesBusinessLogic messagesBussinessLogic) {
            _messagesBussinessLogic = messagesBussinessLogic;
        }

        public async Task<IEnumerable<string>> GetLanguages() {
            return await _messagesBussinessLogic.GetLanguages();
        }
    }
}
