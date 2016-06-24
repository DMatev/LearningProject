(function () {
    'use strict';

    angular
        .module('LearningProject.Core')
        .config(['$stateProvider', RouteConfig]);

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('home', {
                url: '',
                templateUrl: '/app/components/home/home.html',
                controller: 'HomeController',
                controllerAs: 'vm',
                resolve: { /* @ngInject */
                    init: resolveInit
                }
            });

        function resolveInit(initService) {
            return initService.run();
        }
    }

})();