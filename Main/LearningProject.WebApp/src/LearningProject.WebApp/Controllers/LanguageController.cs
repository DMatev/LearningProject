using LearningProject.Core.BusinessLogic.OperationResult.Interfaces;
using LearningProject.Core.DTO.Messages;
using LearningProject.Core.Messages.Interfaces;
using Microsoft.AspNet.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LearningProject.WebApp.Controllers {
    [Route("api/[controller]")]
    public class LanguageController : Controller {
        private readonly IMessagesModuleService _messagesModuleService;
        private readonly IOperationResult _operationResult;

        public LanguageController(IMessagesModuleService messagesModuleService, IOperationResult operationResult) {
            _messagesModuleService = messagesModuleService;
            _operationResult = operationResult;
        }

        [HttpGet]
        public async Task<IEnumerable<LanguageDTO>> Get() {
            var languages = await _messagesModuleService.GetLanguages();
            return languages;
        }
    }
}
