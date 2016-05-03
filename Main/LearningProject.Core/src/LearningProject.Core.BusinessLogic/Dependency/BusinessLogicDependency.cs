using LearningProject.Core.BusinessLogic.ApplicationUser.Implementations;
using LearningProject.Core.BusinessLogic.ApplicationUser.Interfaces;
using LearningProject.Core.BusinessLogic.OperationResult.Implementations;
using LearningProject.Core.BusinessLogic.OperationResult.Interfaces;
using LearningProject.Core.Domain.Data;
using Microsoft.Extensions.DependencyInjection;

namespace LearningProject.Core.Service.Dependency {
    public class BusinessLogicDependency {
        public void Register(IServiceCollection services) {
            services.AddTransient<LearningProjectContext>();
            services.AddScoped<IOperationResult, OperationResult>();
            services.AddScoped<IApplicationUser, ApplicationUser>();
        }
    }
}
