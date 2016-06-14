using System;
using System.Collections.Generic;

namespace LearningProject.Core.Domain.Data
{
    public partial class Translation
    {
        public int TranslationID { get; set; }
        public string Content { get; set; }
        public byte LanguageID { get; set; }
        public string MessageCode { get; set; }
        public byte[] RowRevision { get; set; }

        public virtual Language Language { get; set; }
        public virtual Message MessageCodeNavigation { get; set; }
    }
}
