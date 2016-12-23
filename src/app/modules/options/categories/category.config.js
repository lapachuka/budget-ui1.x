(function () {
    'use strict';

    angular
        .module('categoryModule')
        .config(categoryRoute);

    /* @ngInject */
    function categoryRoute($stateProvider) {
        $stateProvider
            .state('categories', {
                parent: 'page',
                url: '/categories/{type}',
                params: {
                    type: { value: 'income' }
                },
                templateUrl: 'modules/options/categories/list.html',
                controller: 'categoryController as categoryCtrl'
            });
    }
})();
