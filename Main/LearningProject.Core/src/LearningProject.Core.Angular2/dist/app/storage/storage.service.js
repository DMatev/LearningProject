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
var Rx_1 = require('rxjs/Rx');
var StorageService = (function () {
    function StorageService() {
    }
    StorageService.prototype.set = function (key, value) {
        var result = new Rx_1.Observable(function (observer) {
            localStorage.setItem(key, JSON.stringify(value));
            observer.next();
            observer.complete();
        });
        return result;
    };
    StorageService.prototype.get = function (key) {
        var result = new Rx_1.Observable(function (observer) {
            var value;
            value = localStorage.getItem(key);
            if (value === null || value === undefined) {
                observer.error('record with this key not found');
            }
            observer.next(JSON.parse(value));
            observer.complete();
        });
        return result;
    };
    StorageService.prototype.remove = function (key) {
        var result = new Rx_1.Observable(function (observer) {
            var value;
            value = localStorage.getItem(key);
            if (value === null || value === undefined) {
                observer.error('record with this key not found');
            }
            localStorage.removeItem(key);
            observer.next(value);
            observer.complete();
        });
        return result;
    };
    StorageService.prototype.clear = function () {
        var result = new Rx_1.Observable(function (observer) {
            localStorage.clear();
            observer.next();
            observer.complete();
        });
        return result;
    };
    StorageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], StorageService);
    return StorageService;
}());
exports.StorageService = StorageService;
//# sourceMappingURL=storage.service.js.map