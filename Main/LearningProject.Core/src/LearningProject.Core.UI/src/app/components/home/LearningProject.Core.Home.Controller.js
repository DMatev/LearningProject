(function () {
    'use strict';

    angular
        .module('LearningProject.Core.Home.Controller', ['LearningProject.Core.Home.Service', 'LearningProject.Core.Storage.Service', 'LearningProject.Core.Translate.Service'])
        .controller('LearningProject.Core.Home.Controller', HomeController);

    HomeController.$inject = ['LearningProject.Core.Home.Service', 'LearningProject.Core.Storage.Service', 'LearningProject.Core.Translate.Service'];

    function HomeController(homeService, storageService, translationService) {
        var vm = this;
        console.log('getting the message');
        translationService //change not to be promise or use ecma6
            .get('MissingLangauge')
            .then(function (missingLangauge) {
                vm.test = missingLangauge;
            })
            .catch(function (message){
                console.log('error getting the message:');
                console.log(message);
            });
        vm.setStorage = setStorage;
        vm.getStorage = getStorage;
        vm.removeStorage = removeStorage;
        vm.clearStorage = clearStorage;


        function setStorage(key, value) {
            storageService
                .set(key, value);
        }

        function getStorage(key) {
            storageService
                .get(key)
                .then(function (value) {
                    vm.test = value;
                })
                .catch(function () {
                    console.log('fail');
                });
        }

        function removeStorage(key) {
            storageService
                .remove(key);
        }

        function clearStorage() {
            storageService
                .clear();
        }
    }

})();