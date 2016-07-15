require('zone.js');
import 'bootstrap';
import 'reflect-metadata';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { FormBuilder } from '@angular/common';
import { provideRouter } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

bootstrap(AppComponent, [
    ...HTTP_PROVIDERS,
    FormBuilder,
    provideRouter(routes)
]);

declare var module: any;
if (module.hot) {
    module.hot.accept();
}