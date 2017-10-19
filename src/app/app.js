import angular from 'angular';
import uiRouter from 'angular-ui-router';

import 'normalize.css';


import sharedModule from './shared/shared.module';
import commonModule from './common/common.module';
import albumsModule from './albums/albums.module';
import routing from './app.routing';


let app = angular.module('app', [
	uiRouter,
	sharedModule,
	commonModule,
	albumsModule
]);


app.config(routing);


