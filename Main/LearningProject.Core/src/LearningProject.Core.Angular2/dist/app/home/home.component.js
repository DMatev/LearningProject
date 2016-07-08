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
var router_1 = require('@angular/router');
var translation_service_1 = require('../translation/translation.service');
var storage_service_1 = require('../storage/storage.service');
var HomeComponent = (function () {
    function HomeComponent(router, translationService, storageService) {
        this.router = router;
        this.translationService = translationService;
        this.storageService = storageService;
    }
    HomeComponent.prototype.initTanslations = function () {
        this.test = this.translationService.get('MissingLangauge');
    };
    HomeComponent.prototype.clickMe = function (param) {
        this.storageService.set('LanguageID', 2).subscribe(function (success) { }, function (err) { console.log(err); });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.initTanslations();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"container\">\n        <p class=\"lead\">{{test}}</p>\n        <button class=\"btn btn-danger\" (click)=\"clickMe($event)\">Click Me</button>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.Router, translation_service_1.TranslationService, storage_service_1.StorageService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map