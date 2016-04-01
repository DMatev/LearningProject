using System.Collections.Generic;
using System.Threading.Tasks;

namespace LearningProject.Core.Service.Messages.Interfaces {
    public interface IMessagesService {
        Task<IEnumerable<string>> GetLanguages();
    }
}
