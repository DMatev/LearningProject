using LearningProject.Core.Domain.Data;
using Microsoft.Extensions.DependencyInjection;

namespace LearningProject.Core.Repository.Dependency
{
    public class RepositoryDependency
    {
        public void Register(IServiceCollection services)
        {
            services.AddTransient<LearningProjectContext>();
        }
    }
}