(function () {
    'use strict';

    initService.$inject = ['$q', 'storageService', 'translateService'];
    angular
        .module('LearningProject.Core')
        .factory('initService', initService);

    /* @ngInject */
    function initService($q, storageService, translateService) {
        var initService = {
            run: run
        };

        return initService;

        function run() {
            return storageService.get('rememberMe')
                .then(function (rememberMe) {
                    if (rememberMe) {
                        // get user info -> get user language
                    } else {
                        return translateService.init(1);
                    }
                }, function (err) {
                    return translateService.init(1);
                });
        }
    }

})();