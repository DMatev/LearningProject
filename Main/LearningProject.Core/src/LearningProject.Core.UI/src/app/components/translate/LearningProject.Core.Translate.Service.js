(function () {
    'use strict';

    angular
        .module('LearningProject.Core.Translate.Service', [])
        .factory('LearningProject.Core.Translate.Service', translateService);

    translateService.$inject = ['$http', '$q'];

    function translateService($http, $q) {
        var _translations = {},
            translateService = {
                init: init,
                get: get
            };

        return translateService;

        function init(language) {
            var defer = $q.defer();

            if (typeof language !== 'number') {
                defer.reject('the type of the language should be number');
            }

            $http.get('/api/translation/' + language)
                .success(function (res) {
                    _translations = res;
                    defer.resolve();
                })
                .error(function (err) {
                    defer.reject(err);
                });

            return defer.promise;
        }

        function get(key) {
            var defer = $q.defer(),
                translation;

            translation = findTranslation(key);
            if (typeof translation !== 'object' || typeof translation.Content !== 'string') {
                defer.reject('translation not found');
            } else {
                defer.resolve(translation.Content);
            }

            return defer.promise;
        }

        function findTranslation(key) {
            for (var i = 0; i < _translations.length; i++) {
                if (_translations[i].MessageCode === key) {
                    return _translations[i];
                }
            }

            return undefined;
        }
    }

})();