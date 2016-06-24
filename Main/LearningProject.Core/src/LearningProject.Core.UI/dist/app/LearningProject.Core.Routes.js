(function () {
    'use strict';

    angular
        .module('LearningProject.Core')
        .config(['$routeProvider', RouteConfig]);

    function RouteConfig($routeProvider) { // use ui-router instead
        $routeProvider
            .when('/', {
                templateUrl: '/app/components/home/home.html',
                controller: 'HomeController',
                controllerAs: 'vm',
                resolve: {
                    init: resolveInit
                }

            })
            .otherwise({
                redirectTo: '/',
                caseInsensitiveMatch: true
            });

        resolveInit.$inject = ['$q', 'initService'];

        function resolveInit($q, initService) {
            return initService.run();
            // return $q(function (success, error) {
            //     initService
            //         .run()
            //         .finally(function () { success(); });
            // });
        }
    }

})();