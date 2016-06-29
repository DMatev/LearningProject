using LearningProject.Core.Repository.Dependency;
using LearningProject.Core.Repository.Language.Implementations;
using LearningProject.Core.Repository.Language.Interfaces;
using LearningProject.Core.Repository.Translation.Implementations;
using LearningProject.Core.Repository.Translation.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace LearningProject.Core.Service.Dependency
{
    public class BusinessLogicDependency
    {
        public void Register(IServiceCollection services)
        {
            var repositoryDependency = new RepositoryDependency();
            repositoryDependency.Register(services);
            services.AddTransient<ILanguageRepository, LanguageRepository>();
            services.AddTransient<ITranslationRepository, TranslationRepository>();
        }
    }
}
