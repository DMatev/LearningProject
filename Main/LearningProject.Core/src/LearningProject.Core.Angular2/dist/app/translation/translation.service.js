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
var http_1 = require('@angular/http');
var TranslationService = (function () {
    function TranslationService(http) {
        this.http = http;
        this.translationUrl = 'api/translation/';
        this.translations = [];
    }
    TranslationService.prototype.getTranslations = function (languageID) {
        var _this = this;
        return this.http.get(this.translationUrl + languageID)
            .map(function (res) { _this.translations = res.json(); return res.json(); });
    };
    TranslationService.prototype.init = function (languageID) {
        return this.getTranslations(languageID);
    };
    TranslationService.prototype.getTranslation = function (key) {
        var translation;
        translation = this.findTranslation(key);
        if (typeof translation !== 'object' || typeof translation.Content !== 'string') {
            return key;
        }
        return translation.Content;
    };
    TranslationService.prototype.get = function (requestedTranslation) {
        if (typeof requestedTranslation === 'string') {
            return this.getTranslation(requestedTranslation);
        }
        if (Array.isArray(requestedTranslation)) {
            var result = {};
            for (var i = 0; i < requestedTranslation.length; i++) {
                var value = this.getTranslation(requestedTranslation[i]);
                result[requestedTranslation[i]] = value;
            }
            return result;
        }
    };
    TranslationService.prototype.findTranslation = function (key) {
        for (var i = 0; i < this.translations.length; i++) {
            if (this.translations[i].MessageCode === key) {
                return this.translations[i];
            }
        }
        return undefined;
    };
    TranslationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TranslationService);
    return TranslationService;
}());
exports.TranslationService = TranslationService;
//# sourceMappingURL=translation.service.js.map