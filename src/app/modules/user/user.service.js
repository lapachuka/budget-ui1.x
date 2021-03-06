(function () {
	'use strict';

	angular.module('user')
		.factory('userService', userService);

	/*@ngInject*/
	function userService($http, $q, Category, Account, CONSTANT) {
		"use strict";

		var userInfo = {};

		return {
			isAuthorized: isAuthorized,
			logout: logout,
			login: login,
			getInfo: getInfo,
			register: register,
			updateInfo: updateInfo,
			forgotPassword: forgotPassword
		};

		function register(userData) {
			return $http.post(CONSTANT.BASE_URL + '/user', userData);
		}

		function isAuthorized() {
			return $http.get(CONSTANT.BASE_URL + '/isAuthorized');
		}

		function logout() {
			var deferred = $q.defer();

			$http.get(CONSTANT.BASE_URL + '/user/logout')
				.then(function (response) {
					clearAllData();
					deferred.resolve(response);
				}, function (response) {
					deferred.reject(response);
				});

			return deferred.promise;
		}

		function clearAllData() {
			Category.clearAll();
			Account.clearAll();
			userInfo = 'undefined';
		}

		function login(userData) {
			var deferred = $q.defer();

			$http.post(CONSTANT.BASE_URL + '/user/login', userData)
				.then(function (response) {
					updateInfo(response);
					deferred.resolve(response);
				}, function (response) {
					deferred.reject(response);
				});

			return deferred.promise;
		}

		function getInfo() {
			return userInfo;
		}

		function updateInfo(data) {
			userInfo = data;
		}

		function forgotPassword(data) {
			return $http.post(CONSTANT.BASE_URL + '/user/forgot', data);
		}
	}
})();
