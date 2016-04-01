using LearningProject.Core.BusinessLogic.Messages.Implementations;
using LearningProject.Core.BusinessLogic.Messages.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace LearningProject.Core.Service.Dependency {
    public class ServiceDependency {
        public void Register(IServiceCollection services) {
            var businessLogicDependency = new BusinessLogicDependency();
            businessLogicDependency.Register(services);
            services.AddTransient<IMessagesBusinessLogic, MessagesBusinessLogic>();
        }
    }
}
