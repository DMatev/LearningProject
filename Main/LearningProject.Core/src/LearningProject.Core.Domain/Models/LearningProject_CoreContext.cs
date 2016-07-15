using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace LearningProject.Core.Domain.Models
{
    public partial class LearningProject_CoreContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            #warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
            optionsBuilder.UseSqlServer(@"Data Source=localhost;Initial Catalog=LearningProject.Core;Integrated Security=True");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Language>(entity =>
            {
                entity.ToTable("Language", "CodeCore");

                entity.HasIndex(e => e.CountryIsocode)
                    .HasName("UK_Language")
                    .IsUnique();

                entity.Property(e => e.LanguageId).HasColumnName("LanguageID");

                entity.Property(e => e.CountryIsocode)
                    .IsRequired()
                    .HasColumnName("CountryISOCode")
                    .HasMaxLength(3);

                entity.Property(e => e.RowRevision)
                    .IsRequired()
                    .HasColumnType("timestamp")
                    .ValueGeneratedOnAddOrUpdate();
            });

            modelBuilder.Entity<Message>(entity =>
            {
                entity.HasKey(e => e.MessageCode)
                    .HasName("PK_MessageCode");

                entity.ToTable("Message", "CodeCore");

                entity.Property(e => e.MessageCode).HasMaxLength(100);

                entity.Property(e => e.RowRevision)
                    .IsRequired()
                    .HasColumnType("timestamp")
                    .ValueGeneratedOnAddOrUpdate();
            });

            modelBuilder.Entity<Translation>(entity =>
            {
                entity.ToTable("Translation", "Core");

                entity.HasIndex(e => new { e.LanguageId, e.MessageCode })
                    .HasName("UC_Translation")
                    .IsUnique();

                entity.Property(e => e.TranslationId).HasColumnName("TranslationID");

                entity.Property(e => e.Content)
                    .IsRequired()
                    .HasMaxLength(400);

                entity.Property(e => e.LanguageId).HasColumnName("LanguageID");

                entity.Property(e => e.MessageCode)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.RowRevision)
                    .IsRequired()
                    .HasColumnType("timestamp")
                    .ValueGeneratedOnAddOrUpdate();

                entity.HasOne(d => d.Language)
                    .WithMany(p => p.Translation)
                    .HasForeignKey(d => d.LanguageId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_Translation_Languge");

                entity.HasOne(d => d.MessageCodeNavigation)
                    .WithMany(p => p.Translation)
                    .HasForeignKey(d => d.MessageCode)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_Translation_Message");
            });
        }

        public virtual DbSet<Language> Language { get; set; }
        public virtual DbSet<Message> Message { get; set; }
        public virtual DbSet<Translation> Translation { get; set; }
    }
}