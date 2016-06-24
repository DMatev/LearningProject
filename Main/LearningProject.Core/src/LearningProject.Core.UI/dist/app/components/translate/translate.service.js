(function () {
    'use strict';

    angular
        .module('LearningProject.Core')
        .factory('translateService', translateService);

    translateService.$inject = ['$http', '$q'];

    function translateService($http, $q) {
        var translations = {},
            translateService = {
                init: init,
                get: get
            };

        return translateService;

        function init(language) {
            var defer = $q.defer();

            if (typeof language !== 'number') {
                defer.reject('the language type should be number');
            } else {
                $http.get('/api/translation/' + language)
                    .then(function (res) {
                        translations = res.data;
                        defer.resolve();
                    }, function (err) {
                        defer.reject(err);
                    });
            }

            return defer.promise;
        }

        function get(requestedTranslation) {
            var translated = {},
                defer = $q.defer();

            if (typeof requestedTranslation === 'string') {
                return getTranslation(requestedTranslation);
            }

            if (Array.isArray(requestedTranslation)) {
                for (var i = 0; i < requestedTranslation.length; i++) {
                    var translation = getTranslation(requestedTranslation[i]);
                    translated[requestedTranslation[i]] = translation;
                }
                defer.resolve(translated);
                return defer.promise;
            }
        }

        function getTranslation(key) {
            var translation;

            translation = findTranslation(key);

            if (typeof translation !== 'object' || typeof translation.Content !== 'string') {
                return key;
            }

            return translation.Content;
        }

        function findTranslation(key) {
            for (var i = 0; i < translations.length; i++) {
                if (translations[i].MessageCode === key) {
                    return translations[i];
                }
            }

            return undefined;
        }
    }

})();