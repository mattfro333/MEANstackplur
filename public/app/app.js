angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('', {templateUrl: '/partials/main', controller: 'mainCtrl'})
});

angular.module('app').controller('mainCtrl', function($scope){
  console.log("where's?")
    $scope.myVar = "hello angular";

    function cart($scope) {
        $scope.invoice = {
            items: [{
                qty: 10,
                description: 'item',
                cost: 9.95}]
        };

        $scope.addItem = function() {
            $scope.invoice.items.push({
                qty: 1,
                description: '',
                cost: 0
            });
        },

        $scope.removeItem = function(index) {
            $scope.invoice.items.splice(index, 1);
        },

        $scope.total = function() {
            var total = 0;
            angular.forEach($scope.invoice.items, function(item) {
                total += item.qty * item.cost;
            })

            return total;
        }
    }
    cart();
});
