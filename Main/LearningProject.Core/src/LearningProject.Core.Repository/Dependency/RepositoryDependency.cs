using LearningProject.Core.Domain.Models;
using Microsoft.Extensions.DependencyInjection;

namespace LearningProject.Core.Repository.Dependency
{
    public class RepositoryDependency
    {
        public void Register(IServiceCollection services)
        {
            services.AddTransient<LearningProject_CoreContext>();
        }
    }
}