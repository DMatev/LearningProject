"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var storage_service_1 = require('../storage/storage.service');
var translation_service_1 = require('../translation/translation.service');
var InitService = (function () {
    function InitService(storageService, translationService) {
        this.storageService = storageService;
        this.translationService = translationService;
    }
    InitService.prototype.run = function () {
        var _this = this;
        return this.storageService
            .get('LanguageID')
            .subscribe(function (languageID) {
            if (typeof languageID === 'number') {
                return _this.initTranslations(languageID);
            }
            else {
                return _this.initTranslations(1);
            }
        }, function (error) {
            return _this.initTranslations(1);
        });
    };
    InitService.prototype.initTranslations = function (languageID) {
        return this.translationService.init(languageID)
            .subscribe(function (success) { }, function (error) { console.log(error); });
    };
    InitService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [storage_service_1.StorageService, translation_service_1.TranslationService])
    ], InitService);
    return InitService;
}());
exports.InitService = InitService;
//# sourceMappingURL=init.service.js.map