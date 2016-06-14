using LearningProject.Core.Shared.ApplicationUser.Interfaces;

namespace LearningProject.Core.Shared.ApplicationUser.Implementations {
    public class ApplicationUser : IApplicationUser{
        public int UserID { get; set; }
    }
}
