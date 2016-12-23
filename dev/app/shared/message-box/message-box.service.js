;(function(){
    angular
        .module('message-box')
        .factory('messageBoxService', messageBoxService);

    messageBoxService.$inject = ['$mdDialog', '$q'];

    function messageBoxService($mdDialog, $q) {
        return {
            showAlert: showAlert
        };

        function showAlert(title, message) {
            $mdDialog
                .show( $mdDialog.alert()
                    .title(title)
                    .textContent(message)
                    .ok('Ok'));
        }

    }
})();