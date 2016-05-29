using LearningProject.Core.DTO.Messages;
using LearningProject.Core.Service.Messages.Interfaces;
using LearningProject.Core.Shared.OperationResult.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LearningProject.Core.WebApp.Controllers {
    [Route("api/[controller]")]
    public class TranslationController : Controller {
        private readonly IMessagesService _messagesService;
        private readonly IOperationResult _operationResult;

        public TranslationController(IMessagesService messagesService, IOperationResult operationResult) {
            _messagesService = messagesService;
            _operationResult = operationResult;
        }

        [HttpGet("{langugeID}")]
        public async Task<IEnumerable<TranslationDTO>> Get(byte langugeID) {
            var translations = await _messagesService.GetTranslations(langugeID);
            return translations;
        }
    }
}
