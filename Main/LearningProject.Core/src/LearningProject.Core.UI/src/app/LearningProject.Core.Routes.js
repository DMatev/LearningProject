(function () {
    'use strict';

    angular
        .module('LearningProject.Core.Routes', ['ngRoute', 'LearningProject.Core.Home.Controller'])
        .config(['$routeProvider', RouteConfig]);

    function RouteConfig($routeProvider) { // use ui-router instead
        $routeProvider
            .when('/', {
                templateUrl: '/app/components/home/LearningProject.Core.Home.View.html',
                controller: 'LearningProject.Core.Home.Controller',
                controllerAs: 'home',
                resolve: {
                    init: resolveInit
                }

            })
            .otherwise({
                redirectTo: '/',
                caseInsensitiveMatch: true
            });

            resolveInit.$inject = ['$q','LearningProject.Core.Init.Service'];

        function resolveInit($q, initService){
            console.log('resolove init invoked');
            return $q(function(res, rej) {
                initService.run().finally(function() { res() });
            });
        }
    }

})();