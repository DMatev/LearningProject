(function () {
    'use strict';

    storageService.$inject = ['$q'];
    angular
        .module('LearningProject.Core')
        .factory('storageService', storageService);

    /* @ngInject */
    function storageService($q) {
        var storageService = {
            set: set,
            get: get,
            remove: remove,
            clear: clear
        };

        return storageService;

        function set(key, value) {
            var defer = $q.defer();

            localStorage.setItem(key, JSON.stringify(value));
            defer.resolve();

            return defer.promise;
        }

        function get(key) {
            var value,
                defer = $q.defer();

            value = localStorage.getItem(5);

            if (value === null || value === undefined) {
                defer.reject('record with this key not found');
            } else {
                value = JSON.parse(value);
                defer.resolve(value);
            }

            return defer.promise;
        }

        function remove(key) {
            var defer = $q.defer();

            localStorage.removeItem(key);
            defer.resolve();

            return defer.promise;

        }

        function clear() {
            var defer = $q.defer();

            localStorage.clear();
            defer.resolve();

            return defer.promise;
        }
    }
})();