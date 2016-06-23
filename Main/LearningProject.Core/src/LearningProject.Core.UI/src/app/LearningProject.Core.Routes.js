(function () {
    'use strict';

    angular
        .module('LearningProject.Core.Routes', ['ngRoute', 'LearningProject.Core.Home.Controller'])
        .config(['$routeProvider', RouteConfig]);

    function RouteConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/app/components/home/LearningProject.Core.Home.View.html',
                controller: 'LearningProject.Core.Home.Controller',
                controllerAs: 'home'
            })
            .otherwise({
                redirectTo: '/',
                caseInsensitiveMatch: true
            });
    }

})();