import { Injectable } from '@angular/core';

import {Observable} from 'rxjs/Rx';

@Injectable()
export class StorageService {
    set(key: string, value: Object) {
        let result = new Observable(observer => {
            // localStorage.setItem(key, JSON.stringify(value));
            observer.next();
            observer.complete();
        });

        return result;
    }
    get(key: string) {
        let result = new Observable(observer => {
            let value;
            // value = localStorage.getItem(key);

            // if (value === null || value === undefined) {
            //     observer.error('record with this key not found');
            // }
            // observer.next(value);
            observer.next();
            observer.complete();
        });

        return result;
    }
    remove(key: string) {
        let result = new Observable(observer => {
            let value;
            // value = localStorage.getItem(key);
            // if (value === null || value === undefined) {
            //     observer.error('record with this key not found');
            // }
            // localStorage.removeItem(key);
            observer.next();
            observer.complete();
        });

        return result;
    }
    clear(){
        let result = new Observable(observer => {
            // localStorage.clear();
            observer.next();
            observer.complete();
        });

        return result;
    }

}