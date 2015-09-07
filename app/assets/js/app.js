'use strict';

var westfieldApp = angular.module( 'westfieldApp', [
	'ngRoute',
	'ui.bootstrap'
] );


westfieldApp.config( [ '$routeProvider', function($routeProvider) {
	$routeProvider.
		when( '/tabs', {
			templateURL: 'views/tabs.html',
			controller: 'stateTabsCtrl'
		} ).
		when( '/accordion', {
			templateURL: 'views/accordion.html',
			controller: 'locationAccordionCtrl'
		} ).
		when( '/fallback', {
			templateURL: 'views/fallback.html',
			controller: 'fallbackCtrl'
		} ).
		otherwise( {
			redirectTo: '/fallback'
		} );
} ] );
