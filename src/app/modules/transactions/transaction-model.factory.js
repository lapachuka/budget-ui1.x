(function () {
    'use strict';

    angular
        .module('transaction')
        .factory('Transaction', Transaction);

    /* @ngInject */
    function Transaction($http, $q, $rootScope) {
        var self = this,
            transactionList = {
                '': [],
                'income': [],
                'expenses': []
            },
            transactionType = '';

        self.filteredList = [];
        self.fiterDate = {};
        self.searchName = '';

        return {
            getList: getList,
            getById: getById,
            add: add,
            update: update,
            remove: remove,
            buildUrl: buildUrl,
            buildIdUrl: buildIdUrl,
            triggerAnotherMethods: triggerAnotherMethods
        };

        function getList(type, filterDate, searchName) {
            var deferred = $q.defer(),
                url;

            transactionType = typeof type !== 'undefined' ? type: transactionType;
            self.filterDate = filterDate ? filterDate : self.filterDate;
            self.searchName = searchName ? searchName : self.searchName;

            url = buildUrl(transactionType, self.filterDate);

            $http.get(url)
                .then(function (response) {
                    fillListData(response.data);
                    deferred.resolve(transactionList[transactionType]);
                }, function(){
                    deferred.reject(transactionList[transactionType]);
                });

            return deferred.promise;
        }

        function fillListData(response) {
           clearTransactionList();
            response.data.forEach(function (item) {
                transactionList[transactionType].unshift(item);
            });
        }

        function clearTransactionList() {
            transactionList[transactionType].splice(0, transactionList[transactionType].length);
        }

        function add(item, type) {
            var deferred = $q.defer(),
                url = buildUrl(type);

            if (valid(item)) {
                $http.post(url, item)
                    .success(function () {
                        triggerAnotherMethods();
                        getList();
                        deferred.resolve();
                    });
            } else {
                deferred.reject();
            }

            return deferred.promise;
        }

        function triggerAnotherMethods(){
            $rootScope.$broadcast('transactionChanged');
        }

        function remove(id, type) {
            var url = buildIdUrl(id, type);

            $http.delete(url)
                .success(function () {
                    getList();
                });
        }

        function update(item, type) {
            var deferred = $q.defer(),
                url = buildIdUrl(item.id, type);

            if (valid(item)) {
                $http.put(url, item)
                    .success(function () {
                        getList();
                        deferred.resolve();
                    });
            } else {
                deferred.reject();
            }
            return deferred.promise;
        }

        function getById(id, type) {
            var url = buildIdUrl(id, type);

            return $http.get(url);
        }

        function valid() {
            return true;
        }

        function buildIdUrl(id, type) {
            return type ? CONSTANT.BASE_URL + '/transactions/' + id + '?type=' + type : CONSTANT.BASE_URL + '/transactions/' + id;
        }


        function buildUrl(type, filterDate) {
            var url = CONSTANT.BASE_URL + '/transactions';

            if (type) {
                url += '?type=' + type + '&';
            } else {
                url += '?'
            }

            if (filterDate) {
                url += 'year=' + filterDate.year;
                url += '&month=' + filterDate.month;
            }

            return url;
        }
    }
})();

