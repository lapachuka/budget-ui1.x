(function () {
	'use strict';

	appRoutes.$inject = ["$urlRouterProvider", "$httpProvider"];
	angular.module('app')
		.config(appRoutes);

	/* @ngInject */
	function appRoutes($urlRouterProvider, $httpProvider) {

		$urlRouterProvider
			.otherwise('/');

		$httpProvider.interceptors.push('appInterceptor');

	}
})();
