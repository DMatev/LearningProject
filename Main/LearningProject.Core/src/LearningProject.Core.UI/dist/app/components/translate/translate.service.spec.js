(function () {
    'use strict';

    describe('Translate service', function () {
        var translateService,
            $rootScope,
            $httpBackend,
            languageID,
            fakeTranslationKey = 'fakeTranslationKey',
            fakeTranslationValue = 'fakeTranslationContent';

        beforeEach(angular.mock.module('LearningProject.Core'));
        beforeEach(angular.mock.inject(function (_translateService_, _$rootScope_, _$httpBackend_) {
            translateService = _translateService_;
            $rootScope = _$rootScope_;
            $httpBackend = _$httpBackend_;

            $httpBackend
                .when('GET', '/api/translation/1')
                .respond(200, [{ MessageCode: fakeTranslationKey, Content: fakeTranslationValue }]);

            languageID = 1;
        }));

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('should init', function () {
            languageID = 2;

            $httpBackend
                .expectGET('/api/translation/' + languageID)
                .respond(200);

            translateService.init(languageID)
                .then(function (value) {
                    expect(value).toEqual(undefined);
                });

            $httpBackend.flush();
            expect(angular.isFunction(translateService.init)).toBe(true);
        });

        it('should fail at init because of language', function () {
            languageID = 'notIntiger';

            translateService.init(languageID)
                .catch(function (err) {
                    expect(err).toEqual('the language type should be number');
                });

            $httpBackend.flush();
            expect(angular.isFunction(translateService.init)).toBe(true);
        });

        it('should fail at init because of http response', function () {
            var errorData = [{ MessageCode: "MissingLangauge", MessageParams: null }];
            languageID = 3;

            $httpBackend
                .when('GET', '/api/translation/' + languageID)
                .respond(400, errorData);

            translateService.init(languageID)
                .then(function () {
                }, function (err) {
                    expect(err.data).toEqual(errorData);
                });

            $httpBackend.flush();
            expect(angular.isFunction(translateService.init)).toBe(true);
        });

        it('should get transaction by key and return key because transaction is missing', function () {
            var transalationResult;

            transalationResult = translateService.get(fakeTranslationKey);

            $httpBackend.flush();
            expect(angular.isFunction(translateService.get)).toBe(true);
            expect(transalationResult).toEqual(fakeTranslationKey);
        });

        it('should get transaction by key and return transaction', function () {
            var transalationResult;

            translateService.init(1)
                .then(function () {
                    transalationResult = translateService.get(fakeTranslationKey);
                });

            $httpBackend.flush();
            expect(angular.isFunction(translateService.get)).toBe(true);
            expect(transalationResult).toEqual(fakeTranslationValue);
        });

        it('should get transactions by keys and return transactions', function () {
            var transalationResult,
                requestedTranslations = [fakeTranslationKey, 'translationKeyNotFound'];

            translateService.init(1)
                .then(function () {
                    translateService.get(requestedTranslations)
                        .then(function (values) {
                            transalationResult = values;
                        });
                });

            $httpBackend.flush();
            expect(angular.isFunction(translateService.get)).toBe(true);
            expect(transalationResult).toEqual({ fakeTranslationKey: fakeTranslationValue, translationKeyNotFound: 'translationKeyNotFound' });
        });

    });
})();