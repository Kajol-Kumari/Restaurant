(function(){
  'use strict';
  angular.module('MenuApp')
          .config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider,$urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home',{
    url : '/',
    templateUrl : 'src/template/home.html'
  })

  .state('category',{
    url :'/Category',
    templateUrl : 'src/template/category.template.html',
    controller: 'CategoriesController as mainList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

.state('item',{

  url :'/item/{shortName}',
  templateUrl : 'src/template/menuItem.template.html',
   controller: 'MenuItemController as menuItem',
  resolve: {
    items: ['$stateParams','MenuDataService', function ($stateParams,MenuDataService) {
      return MenuDataService.getItemsForCategory($stateParams.shortName);
    }]
  }
});

};

})();
