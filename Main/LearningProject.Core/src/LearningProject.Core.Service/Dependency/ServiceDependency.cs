using LearningProject.Core.BusinessLogic.Messages.Implementations;
using LearningProject.Core.BusinessLogic.Messages.Interfaces;
using LearningProject.Core.Service.Messages.Implementations;
using LearningProject.Core.Service.Messages.Interfaces;
using LearningProject.Core.Service.Validations.Implementations;
using LearningProject.Core.Service.Validations.Interfaces;
using LearningProject.Core.Shared.Dependency;
using Microsoft.Extensions.DependencyInjection;

namespace LearningProject.Core.Service.Dependency {
    public class ServiceDependency {
        public void Register(IServiceCollection services) {
            var sharedDependency = new SharedDependency();
            sharedDependency.Register(services);
            var businessLogicDependency = new BusinessLogicDependency();
            businessLogicDependency.Register(services);
            services.AddTransient<IMessagesBusinessLogic, MessagesBusinessLogic>();
            services.AddTransient<IMessageValidator, MessageValidator>();
            services.AddTransient<IMessagesService, MessagesService>();
        }
    }
}
