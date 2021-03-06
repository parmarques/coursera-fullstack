(function() {
  "use strict"

  angular.module("NarrowItDownApp", [])
         .controller('NarrowItDownController', NarrowItDownController)
         .service('MenuSearchService', MenuSearchService)
         .directive('foundItems', FoundItemsDirective);


  function FoundItemsDirective() {
    var ddo = {
      restrict: 'E',
      templateUrl: 'item.html',
      scope: {
        foundItems: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'list',
      bindToController: true
    };
    return ddo;
  };

  function FoundItemsDirectiveController() {
     var list = this;
  };

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
      var vm = this;

      vm.searchTerm = "";
      vm.found = null;

      vm.getItems = function() {
         if(!vm.searchTerm.trim()) {
           vm.found = [];
           return;
         }
         MenuSearchService.getMatchedMenuItems(vm.searchTerm).then(function(dataResponse) {
            vm.found = dataResponse;
         });
         
      }

      vm.removeItem = function(index) {
         vm.found.splice(index, 1);
      }

  };

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {


      var service = this;

      service.getMatchedMenuItems = function(searchTerm) {
        return $http({
          method: 'GET',
          url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
          }).then(function successCallback(response) {
            var re = new RegExp(searchTerm,"gi");
            var foundItems = [];
            angular.forEach(response.data.menu_items, function(value) {
                if(value.description.match(re)) {
                    foundItems.push(value);
                }
            });
            return foundItems;

          }, function errorCallback(response) {
            return null;
          });
      };

  };



})();
