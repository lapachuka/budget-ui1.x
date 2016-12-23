angular
    .module('app', [
        'angular.filter',
        'ui.router',
        'ngAnimate',
        'ngMaterial',
        'user',
        'login',
        'register',
        'forgotPassword',
        'logined',
        'auth',
        'exchange',
        'templates',
        'categoryModule',
        'transaction',
        'accounts',
        'dashboard',
        'shared',
        'chart',
        'plan'
        //'ngMock'/* just for tests,*//
    ])
  .controller('AppController', function(){

  });


Array.prototype.getIndexBy = function (name, value) {
    for (var i = 0; i < this.length; i++) {
        if (this[i][name] == value) {
            return i;
        }
    }
    return -1;
};