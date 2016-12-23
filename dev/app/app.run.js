(function () {
    'use strict';

    runApp.$inject = ["$rootScope", "$mdToast"];
    angular
        .module('app')
        .run(runApp);

    /* @ngInject */
    function runApp($rootScope, $mdToast) {
        $rootScope.$on( 'httpMessage', function( event, eventData ) {
            $mdToast.show(
                $mdToast
                    .simple()
                    .textContent(eventData.message)
                    .action('CLOSE')
            );
        });
    }

})();