(function () {
    'use strict';

    authConfig.$inject = ["$stateProvider"];
    angular
        .module('auth')
        .config(authConfig);

    /* @ngInject */
    function authConfig($stateProvider) {
        $stateProvider
            .state('auth', {
                abstract: true,
                resolve: {
                    userService: 'userService'
                },
                templateUrl: "layouts/auth/auth.tpl.html"
            });
    }

})();

