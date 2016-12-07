var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.message = 'hello';

  $scope.updateMessage = function( newMessage ){
    $scope.message = newMessage;
  };
});
