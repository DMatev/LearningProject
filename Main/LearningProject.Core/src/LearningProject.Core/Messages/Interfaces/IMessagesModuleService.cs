﻿using LearningProject.Core.DTO.Messages;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LearningProject.Core.Messages.Interfaces {
    public interface IMessagesModuleService {
        Task<IEnumerable<LanguageDTO>> GetLanguages();
        Task<IEnumerable<TranslationDTO>> GetTranslations(byte languageID);
    }
}
