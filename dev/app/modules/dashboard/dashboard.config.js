(function () {
    'use strict';

    dashboardConfig.$inject = ["$stateProvider"];
    angular.module('dashboard')
        .config(dashboardConfig)

    /* @ngInject */
    function dashboardConfig($stateProvider) {
        $stateProvider
            .state('dashboard', {
                parent: 'page',
                url: "/",
                templateUrl: "modules/dashboard/dashboard.tpl.html",
                controller: "dashboardController as dashboardCtrl"
            });
    }
})();