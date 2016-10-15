(function() {
  "use strict"

  angular.module("LunchCheck", [])
         .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {

      $scope.message = null;
      $scope.lunchMenu = null;
      $scope.messageClass = null;

      $scope.checkTooMuch = function() {

          if(!$scope.lunchMenu) {
              $scope.messageClass = 'red';
              $scope.message = 'Please enter data first';
          } else {
              $scope.messageClass = 'green';
              var items = $scope.lunchMenu.split(',');
              var nrValidItems = 0;
              angular.forEach(items, function(value) {
                if(value.trim()) {
                  nrValidItems++;
                }
              });

              if(nrValidItems > 3) {
                $scope.message = 'Too much!';
              } else {
                $scope.message = 'Enjoy!';
              }
          }

      };

      $scope.getMessageClass = function() {
        return $scope.messageClass;
      };
  }
})();
