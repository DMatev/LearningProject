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
var translation_service_1 = require('./translation/translation.service');
var storage_service_1 = require('./storage/storage.service');
var init_service_1 = require('./init/init.service');
var AppComponent = (function () {
    function AppComponent(initService, translationService) {
        this.initService = initService;
        this.translationService = translationService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.initService.run();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <router-outlet></router-outlet>",
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [
                translation_service_1.TranslationService,
                storage_service_1.StorageService,
                init_service_1.InitService,
            ]
        }), 
        __metadata('design:paramtypes', [init_service_1.InitService, translation_service_1.TranslationService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map