// No le pasamos $scope, sino al this, se lo pasamos a una variable self
var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function (){
  var self = this;

  self.message = 'hello';

  self.changeMessage = function(message){
    self.message = message;
  };
});