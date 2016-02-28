import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {enableProdMode, ExceptionHandler, provide} from 'angular2/core';

import {AuthHttp} from './services/auth-http/';

import {AuthService} from './services/auth/';

import {CampaignsService} from './services/campaigns/';
import {CreativesService} from './services/creatives/';
import {PlacementsService} from './services/placements/';
import {UsersService} from './services/users/';

import {CurrentUserService} from './services/current-user/';

import {ExceptionsService} from './services/exceptions/';

import {ContextService} from './services/context/';

import {AppComponent} from './app';

// @if isProd
enableProdMode();
// @endif

bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	provide('API_URL', {useValue: 'http://localhost:3000/api'}),
	provide(AuthHttp, {useClass: AuthHttp}),
	provide(AuthService, {useClass: AuthService}),
	provide(CampaignsService, {useClass: CampaignsService}),
	provide(CreativesService, {useClass: CreativesService}),
	provide(PlacementsService, {useClass: PlacementsService}),
	provide(UsersService, {useClass: UsersService}),
	provide(CurrentUserService, {useClass: CurrentUserService}),
	provide(ExceptionHandler, {useClass: ExceptionsService}),
	provide(ContextService, {useClass: ContextService})
]);
