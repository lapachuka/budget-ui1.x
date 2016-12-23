(function () {
    'use strict';

    exchangeFactory.$inject = ["$http", "$q", "Dashboard", "Transaction", "CONSTANT"];
    angular
        .module('exchange')
        .factory('exchangeFactory', exchangeFactory);


    /* @ngInject */
    function exchangeFactory($http, $q, Dashboard, Transaction, CONSTANT) {
        return {
            change: change
        };
        ////////////////

        function change(exchangeData){
            var deferred = $q.defer(),
                url = CONSTANT.BASE_URL +'/accounts/exchange';

            $http.post(url, exchangeData)
                .then(function (data) {
                    deferred.resolve(data);
                    Transaction.getList();
                    Transaction.triggerAnotherMethods();
                }, function(data){
                  deferred.reject(data);
                });

            return deferred.promise;
        }

        function updateChartsOnDashboardPage(){
            Dashboard.getCharts();
        }

    }

})();

