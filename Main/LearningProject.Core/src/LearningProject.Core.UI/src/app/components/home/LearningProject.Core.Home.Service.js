'use strict';

angular.module('LearningProject.Core.Home.Service', [])
    .service('LearningProject.Core.Home.Service', ['$http', '$q', function ($http, $q) {
        return {
            test: function () {
                var defer = $q.defer();

                $http.get('/api/test')
                    .success(function (res) {
                        console.log(res);
                        defer.resolve(res);
                    })
                    .error(function (err) {
                        console.log(err);
                        defer.reject(err);
                    });

                return defer.promise;
            }
        };
    }]);