'use strict';

angular.module('LearningProject.Core.Routes', ['ngRoute', 'LearningProject.Core.Home.Controller'])
    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: '/app/components/home/LearningProject.Core.Home.View.html',
                controller: 'LearningProject.Core.Home.Controller'
            })
            .otherwise({
                redirectTo: '/',
                caseInsensitiveMatch: true
            });
    }]);