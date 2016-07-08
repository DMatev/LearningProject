import { Injectable } from '@angular/core';

import { StorageService } from '../storage/storage.service';
import { TranslationService } from '../translation/translation.service';

@Injectable()
export class InitService {

    constructor(
        private storageService: StorageService,
        private translationService: TranslationService
    ) { }
    run() {
        return this.storageService
            .get('LanguageID')
            .subscribe(
            languageID => {
                if (typeof languageID === 'number') {
                    return this.initTranslations(languageID)
                } else {
                    return this.initTranslations(1);
                }
            },
            error => {
                return this.initTranslations(1);
            }
            );
    }
    private initTranslations(languageID: number) {
        return this.translationService.init(languageID)
            .subscribe(
            success => { },
            error => { console.log(error); }    );
    }
}