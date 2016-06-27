(function () {
    'use strict';

    HomeController.$inject = ['storageService', 'translateService'];
    angular
        .module('LearningProject.Core')
        .controller('HomeController', HomeController);

    /* @ngInject */
    function HomeController(storageService, translateService) {
        var vm = this;
        vm.test = translateService.get('MissingLangauge');
    }

})();