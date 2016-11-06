(function() {
  "use strict"

  angular.module('MenuApp', ['ui.router'])
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html'
        })
        .state('categories', {
            url: '/categories',
            templateUrl: 'categories.html',
            controlller: 'CategoriesController as ctrl',
            resolve: {
              categories: ['MenuDataService', function(MenuDataService) {
                return MenuDataService.getAllCategories();

              }]
            }
        })
        .state('items', {
            url: '/items/{id}',
            templateUrl: 'items.html',
            controlller: 'ItemsController as ctrl',
            resolve: {
              items: ['MenuDataService, $stateParams', function(MenuDataService, $stateParams) {
                return MenuDataService.getItemsForCategory($stateParams.id);

              }]
            }
        })
        ;



  };



})();
