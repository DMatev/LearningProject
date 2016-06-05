using LearningProject.Core.DTO.Messages;
using LearningProject.Core.Service.Messages.Interfaces;
using LearningProject.Core.Shared.OperationResult.Interfaces;
using LearningProject.Core.WebApp.Helpers;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LearningProject.Core.WebApp.Controllers {
    [Route("api/[controller]")]
    public class LanguageController : BaseController {
        private readonly IMessagesService _messagesService;

        public LanguageController(IMessagesService messagesService, IOperationResult operationResult) : base(operationResult) {
            _messagesService = messagesService;
        }

        [HttpGet]
        public async Task<IEnumerable<LanguageDTO>> Get() {
            var languages = await _messagesService.GetLanguages();
            return languages;
        }
    }
}
