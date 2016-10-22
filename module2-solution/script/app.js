(function() {
  "use strict"

  angular.module("ShoppingListCheckOff", [])
         .controller('ToBuyController', ToBuyController)
         .controller('AlreadyBoughtController', AlreadyBoughtController)
         .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {
      var vm = this;

      vm.getItems = function() {
         return ShoppingListCheckOffService.listBuyItems();
      }

      vm.buy = function(index) {
         ShoppingListCheckOffService.buyItem(index);
      }

  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function AlreadyBoughtController(ShoppingListCheckOffService) {
      var vm = this;

      vm.getItems = function() {
         return ShoppingListCheckOffService.listBoughtItems();
      }
  };

  function ShoppingListCheckOffService() {
      var service = this;

      var toBuyItems = [{quantity: 10, name: 'cookies' }, {quantity: 15, name: 'cookies' }, {quantity: 20, name: 'cookies' },
                {quantity: 25, name: 'cookies' }, {quantity: 30, name: 'cookies' }, {quantity: 35, name: 'cookies' }];
      var boughtItems = [];

      service.buyItem = function(index) {
          boughtItems.push(toBuyItems[index]);
          toBuyItems.splice(index, 1);
      };

      service.listBuyItems = function() {
         return toBuyItems;
      };
      service.listBoughtItems = function() {
         return boughtItems;
      };
  };
})();
