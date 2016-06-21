'use strict';

angular.module('LearningProject.Core.Routes', [])
    .config(['$routeProvider', function ($routeProvider) {
        
        $routeProvider
            .when('/', {
                templateUrl: '/app/components/home/homeView.html',
                controller: 'LearningProject.Core.HomeCtrl'
            })
            .otherwise({
                redirectTo: '/',
                caseInsensitiveMatch: true
            });
    }]);