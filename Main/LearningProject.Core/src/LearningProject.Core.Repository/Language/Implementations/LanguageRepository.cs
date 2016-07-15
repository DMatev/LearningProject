
using LearningProject.Core.Domain.Models;
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
        private readonly LearningProject_CoreContext _context;
        public LanguageRepository(LearningProject_CoreContext learningProjectContext)
        {
            _context = learningProjectContext;
        }

        public async Task<IEnumerable<Domain.Models.Language>> RetrieveLanguagesAsync(Expression<Func<Domain.Models.Language, bool>> predicate)
        {
            var languages = await _context.Language.Where(predicate).ToListAsync();
            return languages;
        }
        public async Task<IEnumerable<Domain.Models.Language>> RetrieveLanguagesAsync()
        {
            var languages = await _context.Language.ToListAsync();
            return languages;
        }
    }
}