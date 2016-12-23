describe('Karma tests', function () {

    beforeEach(module('app'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('sum', function () {
        it('1 + 1 should equal 2', function () {
            var $scope = {};


            /*var controller = $controller('CalculatorController', {
                $scope: $scope
            });*/
            $scope.x = 1;
            $scope.y = 2;
            $scope.z = 1 + 2;
            expect($scope.z).toBe(3);
        });
    });

});