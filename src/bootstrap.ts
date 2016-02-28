import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {enableProdMode, provide} from 'angular2/core';

import {PlantsService} from './services/plants/';

import {AppComponent} from './app';

// @if isProd
enableProdMode();
// @endif

bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	provide('API_URL', {useValue: 'http://localhost:3000/api'}),
	provide(PlantsService, {useClass: PlantsService})
]);
