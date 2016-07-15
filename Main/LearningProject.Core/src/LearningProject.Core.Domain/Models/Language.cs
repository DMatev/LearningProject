using System.Collections.Generic;

namespace LearningProject.Core.Domain.Models
{
    public partial class Language
    {
        public Language()
        {
            Translation = new HashSet<Translation>();
        }

        public byte LanguageId { get; set; }
        public string CountryIsocode { get; set; }
        public byte[] RowRevision { get; set; }

        public virtual ICollection<Translation> Translation { get; set; }
    }
}
