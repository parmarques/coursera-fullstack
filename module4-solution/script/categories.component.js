(function() {
  "use strict"

  angular.module('MenuApp', [])
         .component('categories', {
        templateUrl: 'category.html',
        bindings: {
          data: '<'
        }

  });



})();
