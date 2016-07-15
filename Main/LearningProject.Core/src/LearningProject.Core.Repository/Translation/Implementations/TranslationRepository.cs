
using LearningProject.Core.Domain.Models;
using LearningProject.Core.Repository.Translation.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace LearningProject.Core.Repository.Translation.Implementations
{
    public class TranslationRepository : ITranslationRepository
    {
        private readonly LearningProject_CoreContext _context;
        public TranslationRepository(LearningProject_CoreContext learningProjectContext)
        {
            _context = learningProjectContext;
        }

        public async Task<IEnumerable<Domain.Models.Translation>> RetrieveTranslationsAsync(Expression<Func<Domain.Models.Translation, bool>> predicate)
        {
            var translations = await _context.Translation.Where(predicate).ToListAsync();

            return translations;
        }
        public async Task<IEnumerable<Domain.Models.Translation>> RetrieveTranslationsAsync()
        {
            var translations = await _context.Translation.ToListAsync();

            return translations;
        }
    }
}