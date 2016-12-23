(function () {
    'use strict';

    accountsRoute.$inject = ["$stateProvider"];
    angular
        .module('accounts')
        .config(accountsRoute);

    /* @ngInject */
    function accountsRoute($stateProvider) {
        $stateProvider
            .state('accounts', {
                parent: 'page',
                url: '/accounts',
                templateUrl: 'modules/options/accounts/list.html',
                controller: 'accountsController as aCtrl'
            });
    }
})();
