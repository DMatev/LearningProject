using System;
using System.Collections.Generic;

namespace LearningProject.Core.Domain.Data
{
    public partial class Language
    {
        public Language()
        {
            Translation = new HashSet<Translation>();
        }

        public byte LanguageID { get; set; }
        public string CountryISOCode { get; set; }
        public byte[] RowRevision { get; set; }

        public virtual ICollection<Translation> Translation { get; set; }
    }
}
