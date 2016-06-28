(function () {
    'use strict';

    angular
        .module('LearningProject.Core')
        .controller('HomeController', HomeController);

    /* @ngInject */
    function HomeController(storageService, translateService) {
        var vm = this;
        vm.test = translateService.get('MissingLangauge');
        vm.clickMe = function (){
            translateService.init(3)
            .then(function(){
                console.log('success');
            }, function (err){
                console.log('err:');
                console.log(err);
            });
        };
    }

})();