using LearningProject.Core.BusinessLogic.OperationResult.Interfaces;
using LearningProject.Core.DTO.Messages;
using LearningProject.Core.Messages.Interfaces;
using Microsoft.AspNet.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LearningProject.WebApp.Controllers {
    [Route("api/[controller]")]
    public class TranslationController : Controller {
        private readonly IMessagesModuleService _messagesModuleService;
        private readonly IOperationResult _operationResult;

        public TranslationController(IMessagesModuleService messagesModuleService, IOperationResult operationResult) {
            _messagesModuleService = messagesModuleService;
            _operationResult = operationResult;
        }

        [HttpGet("{id}")]
        public async Task<IEnumerable<TranslationDTO>> Get(byte id) {
            var translations = await _messagesModuleService.GetTranslations(id);
            return translations;
        }
    }
}
