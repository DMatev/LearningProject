import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Translation } from './translation.model';

@Injectable()
export class TranslationService {

    private translationUrl = 'api/translation/';
    private translations: Array<Translation>;
    constructor(private http: Http) {
        this.translations = [];
    }

    getTranslations(languageID: number) {
        return this.http.get(this.translationUrl + languageID)
            .map((res: Response) => { this.translations = res.json(); return res.json() });
    }

    init(languageID: number) {
        return this.getTranslations(languageID)
    }

    private getTranslation(key: string) {
        let translation;

        translation = this.findTranslation(key);

        if (typeof translation !== 'object' || typeof translation.Content !== 'string') {
            return key;
        }

        return translation.Content;
    }

    public get(requestedTranslation: string | Array<string>) {
        if (typeof requestedTranslation === 'string') {
            return this.getTranslation(requestedTranslation);
        }
        if (Array.isArray(requestedTranslation)) {
            let result = {};
            for (let i = 0; i < requestedTranslation.length; i++) {
                let value = this.getTranslation(requestedTranslation[i]);
                result[requestedTranslation[i]] = value;
            }

            return result;
        }
    }

    private findTranslation(key: string) {
        for (let i = 0; i < this.translations.length; i++) {
            if (this.translations[i].MessageCode === key) {
                return this.translations[i];
            }
        }

        return undefined;
    }
}
