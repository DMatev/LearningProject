using System.Collections.Generic;
using System.Threading.Tasks;

namespace LearningProject.Core.BusinessLogic.Messages.Interfaces {
    public interface IMessagesBusinessLogic {
        Task<IEnumerable<string>> GetLanguages();
    }
}
