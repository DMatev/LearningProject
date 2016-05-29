using LearningProject.Core.DTO.Messages;
using LearningProject.Core.Service.Messages.Interfaces;
using LearningProject.Core.Shared.OperationResult.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LearningProject.Core.WebApp.Controllers {
    [Route("api/[controller]")]
    public class LanguageController : Controller {
        private readonly IMessagesService _messagesService;
        private readonly IOperationResult _operationResult;

        public LanguageController(IMessagesService messagesService, IOperationResult operationResult) {
            _messagesService = messagesService;
            _operationResult = operationResult;
        }

        [HttpGet]
        public async Task<IEnumerable<LanguageDTO>> Get() {
            var languages = await _messagesService.GetLanguages();
            return languages;
        }
    }
}
