;(function () {
    'use strict';

    login.$inject = ["$state", "userService", "messageBoxService"];
    angular.module('login')
        .controller('LoginController', login);

    /*@ngInject*/

    function login($state, userService, messageBoxService) {
        var self = this;

        this.user = {};

        this.signIn = signIn;

        function signIn(event) {
            var data = buildData();

            userService
                .login(data)
                .then(successHandler, errorHandler);
        }

        function successHandler(userData) {
            $state.go('dashboard');
        }

        function errorHandler(response) {
            messageBoxService.showAlert('Login Error',response.data.message);
        }

        function buildData() {
            return {
                login: self.user.email,
                email: self.user.email,
                password: self.user.password
            };
        }
    }
})();

