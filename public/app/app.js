angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('', {templateUrl: '/partials/main', controller: 'mainCtrl'})
});

angular.module('app').controller('mainCtrl', function($scope){
  console.log("where's?")
    $scope.myVar = "hello angular";
    $scope.products = productService.getProducts();

$scope.addToCart = function(product) {
  cartService.addToCart(product).then(function(){
  cartService.getCart().then(function(res){
    $scope.cart = res.data;
  })
 })
}

cartService.getCart().then(function(res){
  $scope.cart = res.data;
})
});
