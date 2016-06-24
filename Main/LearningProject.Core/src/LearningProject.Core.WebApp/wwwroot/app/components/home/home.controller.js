(function () {
    'use strict';

    HomeController.$inject = ['homeService', 'storageService', 'translateService'];
    angular
        .module('LearningProject.Core')
        .controller('HomeController', HomeController);

    /* @ngInject */
    function HomeController(homeService, storageService, translateService) {
        var vm = this;
        vm.test = translateService.get('MissingLangauge');
    }

})();