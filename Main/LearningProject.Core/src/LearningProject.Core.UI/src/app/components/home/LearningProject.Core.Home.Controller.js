'use strict';

angular.module('LearningProject.Core.Home.Controller', ['LearningProject.Core.Home.Service'])
    .controller('LearningProject.Core.Home.Controller', ['$scope', 'LearningProject.Core.Home.Service', function ($scope, homeService) {

        $scope.test = 'Hello!';

        $scope.clickMe = function () {
            homeService.test().then(function (res) {
                $scope.test = res;
            });
        };

    }]);