'use strict';

angular.module('LearningProject.Core.HomeService', [])
    .service('LearningProject.Core.HomeService', ['$http', '$q', function ($http, $q) {
        return {
            'test': function () {
                var defer = $q.defer();

                $http.get('/api/test')
                    .success(function (res) {
                        console.log(res);
                        defer.resolve(res);
                    })
                    .error(function (err) {
                        defer.reject(err);
                    });

                return defer.promise;
            }
        };
    }]);