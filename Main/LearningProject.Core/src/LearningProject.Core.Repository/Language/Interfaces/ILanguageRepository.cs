using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace LearningProject.Core.Repository.Language.Interfaces
{
    public interface ILanguageRepository
    {
        Task<IEnumerable<Domain.Models.Language>> RetrieveLanguagesAsync(Expression<Func<Domain.Models.Language, bool>> predicate);
        Task<IEnumerable<Domain.Models.Language>> RetrieveLanguagesAsync();
    }
}