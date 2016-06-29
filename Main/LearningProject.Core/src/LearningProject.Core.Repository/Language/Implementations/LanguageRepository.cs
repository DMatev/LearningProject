
using LearningProject.Core.Domain.Data;
using LearningProject.Core.Repository.Language.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace LearningProject.Core.Repository.Language.Implementations
{
    public class LanguageRepository : ILanguageRepository
    {
        private readonly LearningProjectContext _context;
        public LanguageRepository(LearningProjectContext learningProjectContext)
        {
            _context = learningProjectContext;
        }

        public async Task<IEnumerable<Domain.Data.Language>> RetrieveLanguagesAsync(Expression<Func<Domain.Data.Language, bool>> predicate)
        {
            var languages = await _context.Language.Where(predicate).ToListAsync();
            return languages;
        }
        public async Task<IEnumerable<Domain.Data.Language>> RetrieveLanguagesAsync()
        {
            var languages = await _context.Language.ToListAsync();
            return languages;
        }
    }
}