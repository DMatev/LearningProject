using LearningProject.Core.BusinessLogic.Messages.Implementations;
using LearningProject.Core.BusinessLogic.Messages.Interfaces;
using LearningProject.Core.Messages.Implementations;
using LearningProject.Core.Messages.Interfaces;
using LearningProject.Core.Validations.Implementations;
using LearningProject.Core.Validations.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace LearningProject.Core.Service.Dependency {
    public class CoreDependency {
        public void Register(IServiceCollection services) {
            var businessLogicDependency = new BusinessLogicDependency();
            businessLogicDependency.Register(services);
            services.AddTransient<IMessagesBusinessLogic, MessagesBusinessLogic>();
            services.AddTransient<IMessageValidator, MessageValidator>();
            services.AddTransient<IMessagesService, MessagesService>();
        }
    }
}
