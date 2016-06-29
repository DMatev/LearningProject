using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace LearningProject.Core.Repository.Translation.Interfaces
{
    public interface ITranslationRepository
    {
        Task<IEnumerable<Domain.Data.Translation>> RetrieveTranslationsAsync(Expression<Func<Domain.Data.Translation, bool>> predicate);
        Task<IEnumerable<Domain.Data.Translation>> RetrieveTranslationsAsync();

    }
}