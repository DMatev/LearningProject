using LearningProject.Core.Shared.ApplicationUser.Interfaces;
using LearningProject.Core.Shared.OperationResult.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace LearningProject.Core.Shared.Dependency {
    public class SharedDependency {
        public void Register(IServiceCollection services) {
            services.AddScoped<IOperationResult, OperationResult.Implementations.OperationResult>();
            services.AddScoped<IApplicationUser, ApplicationUser.Implementations.ApplicationUser>();
        }
    }
}
