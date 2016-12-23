(function () {
    'use strict';

    angular
        .module('transaction')
        .config(transactionRoute);

    /* @ngInject */
    function transactionRoute($stateProvider) {
        $stateProvider
            .state('transactions', {
                parent: 'page',
                url: "/transactions/{type}",
                templateUrl: "modules/transactions/views/list.html",
                controller: "transactionController as tCtrl"
            })
    }
})();


