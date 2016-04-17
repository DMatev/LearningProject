using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using LearningProject.Core.Messages.Interfaces;
using LearningProject.Core.BusinessLogic.OperationResult.Implementations;
using LearningProject.Core.BusinessLogic.OperationResult.Interfaces;

namespace LearningProject.WebApp.Controllers {
    public class HomeController : Controller {

        private readonly IMessagesModuleService _messagesModuleService;
        private readonly IOperationResult _operationResult;


        public HomeController(IMessagesModuleService messagesModuleService, IOperationResult operationResult) {
            _messagesModuleService = messagesModuleService;
            _operationResult = operationResult;
        }

        public async Task<IEnumerable<string>> Index() {
            var languages = await _messagesModuleService.GetLanguages();
            return languages;
        }

        public IActionResult About() {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact() {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error() {
            return View();
        }
    }
}
