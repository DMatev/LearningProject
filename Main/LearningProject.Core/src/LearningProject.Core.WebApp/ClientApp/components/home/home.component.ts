import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TranslationService } from '../translation/translation.service';
import { StorageService } from '../storage/storage.service';


@Component({
    selector: 'my-app',
    template: `
    <div class="container">
        <p class="lead">{{test}}</p>
        <button class="btn btn-danger" (click)="clickMe($event)">Click Me</button>
    </div>
    `
})
export class HomeComponent implements OnInit {
    test: string;

    constructor(
        private router: Router,
        private translationService: TranslationService,
        private storageService: StorageService) {
    }

    initTanslations() {
        this.test = this.translationService.get('MissingLangauge');
    }

    public clickMe(param) {
        console.log('test10');
    }

    ngOnInit() {
        this.initTanslations();
    }
}