var myApp = angular.module('myApp',[]);

myApp.controller('DoubleController', ['$scope', function($scope) {
  $scope.x2 = function(value) { return value * 2; };
}]);