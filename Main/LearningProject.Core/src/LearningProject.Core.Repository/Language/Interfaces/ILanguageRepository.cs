using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace LearningProject.Core.Repository.Language.Interfaces
{
    public interface ILanguageRepository
    {
        Task<IEnumerable<Domain.Data.Language>> RetrieveLanguagesAsync(Expression<Func<Domain.Data.Language, bool>> predicate);
        Task<IEnumerable<Domain.Data.Language>> RetrieveLanguagesAsync();
    }
}