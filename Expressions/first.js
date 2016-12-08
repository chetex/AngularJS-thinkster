angular.module('oneTimeBidingExampleApp', []).
controller('EventController', ['$scope', function($scope) {
  var counter = 0;
  var names = ['Nacho', 'Misko', 'Chirayu', 'Lucas'];
  /*
   * expose the event object to the scope
   */
  $scope.clickMe = function(clickEvent) {
    $scope.name = names[counter % names.length];
    console.log(counter % names.length);
    counter++;
  };
}]);