(function () {
    'use strict';

    angular
        .module('LearningProject.Core')
        .config(['$routeProvider', RouteConfig]);

    function RouteConfig($routeProvider) { // use ui-router instead
        resolveInit.$inject = ['$q', 'initService'];
        $routeProvider
            .when('/', {
                templateUrl: '/app/components/home/home.html',
                controller: 'HomeController',
                controllerAs: 'vm',
                resolve: { /* @ngInject */
                    init: resolveInit
                }
            })
            .otherwise({
                redirectTo: '/',
                caseInsensitiveMatch: true
            });

        function resolveInit($q, initService) {
            return initService.run();
        }
    }

})();