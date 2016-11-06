(function() {
  "use strict"

  angular.module('MenuApp', [])
         .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['data'];
  function ItemsController(data) {
    var controller = this;
    var controller.data = data;

  };



})();
