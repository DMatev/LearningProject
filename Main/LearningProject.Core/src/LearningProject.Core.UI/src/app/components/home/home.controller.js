(function () {
    'use strict';

    angular
        .module('LearningProject.Core')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['homeService', 'storageService', 'translateService'];

    function HomeController(homeService, storageService, translationService) {
        var vm = this;
        vm.test = translationService.get('MissingLangauge');
    }

})();