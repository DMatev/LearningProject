using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace LearningProject.Core.Repository.Translation.Interfaces
{
    public interface ITranslationRepository
    {
        Task<IEnumerable<Domain.Models.Translation>> RetrieveTranslationsAsync(Expression<Func<Domain.Models.Translation, bool>> predicate);
        Task<IEnumerable<Domain.Models.Translation>> RetrieveTranslationsAsync();

    }
}