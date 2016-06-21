'use strict';

angular.module('LearningProject.Core.HomeController', [])
    .controller('LearningProject.Core.HomeCtrl', ['$scope', 'LearningProject.Core.HomeService', function ($scope, HomeService) {
        $scope.test = 'Hello!';

        $scope.clickMe = function (){
            HomeService.test().then(function (res){
                $scope.test = res;
            });
        };
        
    }]);