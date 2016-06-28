'use strict';

describe('Storage service', function () {
    var storageService;

    beforeEach(angular.mock.module('LearningProject.Core'));
    beforeEach(angular.mock.inject(function (_storageService_) {
        storageService = _storageService_;

    }));

    it('should get element from storage', function () {
        var key = 'testKey',
            store = {};

        spyOn(localStorage, 'getItem').and.callFake(function (key) {
            return store[key];
        });

        storageService.get(key);
        expect(angular.isFunction(storageService.get)).toBe(true);
        expect(localStorage.getItem).toHaveBeenCalledWith(key);
    });

});