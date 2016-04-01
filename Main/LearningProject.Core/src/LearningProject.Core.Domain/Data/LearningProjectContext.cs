using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Metadata;

namespace LearningProject.Core.Domain.Data {
    public partial class LearningProjectContext : DbContext {
        protected override void OnConfiguring(DbContextOptionsBuilder options) {
            options.UseSqlServer(@"Data Source=MONSTER\SQLEXPRESS;Initial Catalog=LearningProject;Integrated Security=True");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<Language>(entity => {
                entity.ToTable("Language", "CodeCore");

                entity.HasIndex(e => e.CountryISOCode).HasName("UK_Language").IsUnique();

                entity.Property(e => e.LanguageID).ValueGeneratedNever();

                entity.Property(e => e.CountryISOCode)
                    .IsRequired()
                    .HasMaxLength(3);

                entity.Property(e => e.RowRevision)
                    .IsRequired()
                    .HasColumnType("timestamp")
                    .ValueGeneratedOnAddOrUpdate();
            });

            modelBuilder.Entity<Message>(entity => {
                entity.HasKey(e => e.MessageCode);

                entity.ToTable("Message", "Core");

                entity.Property(e => e.MessageCode).HasMaxLength(200);

                entity.Property(e => e.RowRevision)
                    .IsRequired()
                    .HasColumnType("timestamp")
                    .ValueGeneratedOnAddOrUpdate();
            });

            modelBuilder.Entity<Translation>(entity => {
                entity.ToTable("Translation", "Core");

                entity.HasIndex(e => new { e.LanguageID, e.MessageCode }).HasName("UC_Translation").IsUnique();

                entity.Property(e => e.TranslationID).ValueGeneratedNever();

                entity.Property(e => e.Content)
                    .IsRequired()
                    .HasMaxLength(400);

                entity.Property(e => e.MessageCode)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.RowRevision)
                    .IsRequired()
                    .HasColumnType("timestamp")
                    .ValueGeneratedOnAddOrUpdate();

                entity.HasOne(d => d.Language).WithMany(p => p.Translation).HasForeignKey(d => d.LanguageID).OnDelete(DeleteBehavior.Restrict);

                entity.HasOne(d => d.MessageCodeNavigation).WithMany(p => p.Translation).HasForeignKey(d => d.MessageCode).OnDelete(DeleteBehavior.Restrict);
            });
        }

        public virtual DbSet<Language> Language { get; set; }
        public virtual DbSet<Message> Message { get; set; }
        public virtual DbSet<Translation> Translation { get; set; }
    }
}