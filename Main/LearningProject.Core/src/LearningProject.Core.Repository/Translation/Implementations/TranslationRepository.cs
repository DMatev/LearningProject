
using LearningProject.Core.Domain.Data;
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
        private readonly LearningProjectContext _context;
        public TranslationRepository(LearningProjectContext learningProjectContext)
        {
            _context = learningProjectContext;
        }

        public async Task<IEnumerable<Domain.Data.Translation>> RetrieveTranslationsAsync(Expression<Func<Domain.Data.Translation, bool>> predicate)
        {
            var translations = await _context.Translation.Where(predicate).ToListAsync();

            return translations;
        }
        public async Task<IEnumerable<Domain.Data.Translation>> RetrieveTranslationsAsync()
        {
            var translations = await _context.Translation.ToListAsync();

            return translations;
        }
    }
}