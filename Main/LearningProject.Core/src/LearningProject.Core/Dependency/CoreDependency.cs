using LearningProject.Core.Messages.Implementations;
using LearningProject.Core.Messages.Interfaces;
using LearningProject.Core.Service.Messages.Implementations;
using LearningProject.Core.Service.Messages.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace LearningProject.Core.Service.Dependency {
    public class CoreDependency {
        public void Register(IServiceCollection services) {
            var serviceDependency = new ServiceDependency();
            serviceDependency.Register(services);
            services.AddTransient<IMessagesService, MessagesService>();
            services.AddTransient<IMessagesModuleService, MessagesModuleService>();
        }
    }
}
