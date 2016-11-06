(function() {
  "use strict"

  angular.module('MenuApp')
         .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['items', 'category'];
  function ItemsController(items,category) {
    var controller = this;
    controller.items = items.data.menu_items;
    controller.category = category;
  };



})();
