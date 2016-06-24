(function () {
    'use strict';

    angular
        .module('LearningProject.Core')
        .factory('homeService', homeService);

    homeService.$inject = ['$http'];

    function homeService($http) {
        var homeService = {
            test: test
        };

        return homeService;

        function test() {
            return $http.get('/api/test')
                .then(function (response) {
                    return response;
                }, function (error) {
                    return error;
                });
        }
    }

})();