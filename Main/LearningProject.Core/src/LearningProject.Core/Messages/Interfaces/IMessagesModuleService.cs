using System.Collections.Generic;
using System.Threading.Tasks;

namespace LearningProject.Core.Messages.Interfaces {
    public interface IMessagesModuleService {
        Task<IEnumerable<string>> GetLanguages();
    }
}
