(function () {
    'use strict';

    angular
        .module('LearningProject.Core.Home.Service', [])
        .factory('LearningProject.Core.Home.Service', homeService);

    homeService.$inject = ['$http', '$q'];

    function homeService($http, $q) {
        var homeService = {
            test: test
        };

        return homeService;

        function test() {
            var defer = $q.defer();

            $http.get('/api/test')
                .success(function (res) {
                    defer.resolve(res);
                })
                .error(function (err) {
                    defer.reject(err);
                });

            return defer.promise;
        }
    }

})();