(function () {
    'use strict';

    angular
        .module('LearningProject.Core.Home.Service', [])
        .factory('LearningProject.Core.Home.Service', homeService); //rename factoryName and use inject gulp

    homeService.$inject = ['$http', '$q'];

    function homeService($http, $q) {
        var homeService = {
            test: test
        };

        return homeService;

        function test() {
            var defer = $q.defer();

            $http.get('/api/test')
                .success(function (res) { //use then success and error are depricated
                    defer.resolve(res);
                })
                .error(function (err) {
                    defer.reject(err);
                });

            return defer.promise;
        }
    }

})();