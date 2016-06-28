(function () {
    'use strict';

    describe('Storage service', function () {
        var storageService,
            $rootScope,
            $httpBackend,
            testKey = 'testKey',
            testValue = 'testValue',
            store;

        beforeEach(angular.mock.module('LearningProject.Core'));
        beforeEach(angular.mock.inject(function (_storageService_, _$rootScope_, _$httpBackend_) {
            storageService = _storageService_;
            $rootScope = _$rootScope_;
            $httpBackend = _$httpBackend_;

            $httpBackend
                .when('GET', '/api/translation/1')
                .respond(200);

            store = {};
        }));

        it('should get element from storage', function () {
            store = {
                testKey: JSON.stringify(testValue)
            };

            spyOn(localStorage, 'getItem').and.callFake(function (key) {
                return store[key];
            });

            storageService.get(testKey)
                .then(function (value) {
                    expect(value).toEqual(testValue);
                });

            $rootScope.$digest();
            expect(angular.isFunction(storageService.get)).toBe(true);
            expect(localStorage.getItem).toHaveBeenCalledWith(testKey);
        });

        it('should fail at getting element from storage', function () {
            var incorrectKey = 'incorrectKey';

            store = {
                testKey: JSON.stringify(testValue)
            };

            spyOn(localStorage, 'getItem').and.callFake(function (incorrectKey) {
                return store[incorrectKey];
            });

            storageService.get(incorrectKey)
                .catch(function (err) {
                    expect(err).toEqual('record with this key not found');
                });

            $rootScope.$digest();
            expect(angular.isFunction(storageService.get)).toBe(true);
            expect(localStorage.getItem).toHaveBeenCalledWith(incorrectKey);
        });

        it('should set element to storage', function () {
            spyOn(localStorage, 'setItem');

            storageService.set(testKey, testValue)
                .then(function (value) {
                    expect(value).toEqual(undefined);
                });

            $rootScope.$digest();
            expect(angular.isFunction(storageService.set)).toBe(true);
            expect(localStorage.setItem).toHaveBeenCalledWith(testKey, JSON.stringify(testValue));
        });

        it('should remove element from storage', function () {
            store = {
                testKey: JSON.stringify(testValue)
            };

            spyOn(localStorage, 'removeItem');

            storageService.remove(testKey)
                .then(function (value) {
                    expect(value).toEqual(undefined);
                });

            $rootScope.$digest();
            expect(angular.isFunction(storageService.remove)).toBe(true);
            expect(localStorage.removeItem).toHaveBeenCalledWith(testKey);
        });

        it('should clear all elements from storage', function () {
            spyOn(localStorage, 'clear');

            storageService.clear()
                .then(function (value) {
                    expect(value).toEqual(undefined);
                });

            $rootScope.$digest();
            expect(angular.isFunction(storageService.clear)).toBe(true);
            expect(localStorage.clear).toHaveBeenCalledWith();
        });

    });
})();