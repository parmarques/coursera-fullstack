(function() {
  "use strict"

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'templates/home.html'
        })
        .state('categories', {
            url: '/categories',
            templateUrl: 'templates/categories.html',
            controller: 'CategoriesController as catCtrl',
            resolve: {
              categories: ['MenuDataService', function(MenuDataService) {
                return MenuDataService.getAllCategories();
              }]
            }
        })
        .state('items', {
            url: '/items/{id}',
            templateUrl: 'templates/items.html',
            controller: 'ItemsController as itemsCtrl',
            resolve: {
              items: ['$stateParams','MenuDataService', function($stateParams, MenuDataService) {
                return MenuDataService.getItemsForCategory($stateParams.id);
              }],
              category: ['$stateParams','MenuDataService', function($stateParams) {
                return $stateParams.id;
              }]
            }
        })
        ;



  };



})();
