;(function() {
    'use strict';

    angular
        .module('login')
        .config(loginConfig);

    /*@ngInject*/
    function loginConfig($stateProvider) {
        $stateProvider
            .state('login', {
                url: "/login",
                parent: 'auth',
                templateUrl: "modules/auth/login/login.tpl.html",
                controller: "LoginController as loginCtrl"
            });
    }
})();