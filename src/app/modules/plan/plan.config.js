(function () {
    'use strict';

    angular
        .module('plan')
        .config(planRoute);

    /* @ngInject */
    function planRoute($stateProvider) {
        $stateProvider
            .state('plan', {
                parent: 'page',
                url: '/plan/{type}',
                params: {
                    type: { value: 'expenses' }
                },
                templateUrl: 'modules/plan/plan.html',
                controller: 'planController as pCtrl'
            });
    }
})();