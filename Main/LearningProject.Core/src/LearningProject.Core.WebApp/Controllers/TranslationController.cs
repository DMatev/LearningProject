using LearningProject.Core.DTO.Messages;
using LearningProject.Core.Service.Messages.Interfaces;
using LearningProject.Core.Shared.OperationResult.Interfaces;
using LearningProject.Core.WebApp.Helpers;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LearningProject.Core.WebApp.Controllers {
    [Route("api/[controller]")]
    public class TranslationController : BaseController {
        private readonly IMessagesService _messagesService;

        public TranslationController(IOperationResult operationResult, IMessagesService messagesService) : base(operationResult) {
            _messagesService = messagesService;
        }

        [HttpGet("{langugeID}")]
        public async Task<IEnumerable<TranslationDTO>> Get(byte langugeID) {
            var translations = await _messagesService.GetTranslation(langugeID);
            return translations;
        }
    }
}
