namespace LearningProject.Core.Domain.Models
{
    public partial class Translation
    {
        public int TranslationId { get; set; }
        public string MessageCode { get; set; }
        public string Content { get; set; }
        public byte LanguageId { get; set; }
        public byte[] RowRevision { get; set; }

        public virtual Language Language { get; set; }
        public virtual Message MessageCodeNavigation { get; set; }
    }
}
