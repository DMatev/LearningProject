import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { TranslationService } from './translation/translation.service';
import { StorageService } from './storage/storage.service';
import { InitService } from './init/init.service';

@Component({
  selector: 'my-app',
  template: `
  <router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    TranslationService,
    StorageService,
    InitService,
  ]
})

export class AppComponent implements OnInit {
  constructor(
    private initService: InitService,
    private translationService: TranslationService) { }

  ngOnInit() {
    this.initService.run();
  }
}
