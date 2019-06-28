describe('The menu service', function(){
  'use strict';

  var $httpBackend;
  var menuService;
  var ApiPath;

  beforeEach(function () {
    module('common');
  inject (function($injector){
  $httpBackend = $injector.get('$httpBackend');
  menuService = $injector.get('MenuService');
  ApiPath = $injector.get('ApiPath');
});
});

it('should return categories list', function(){
  $httpBackend.whenGET(ApiPath + '/categories.json').respond(['Lunch', 'Dessert']);
  menuService.getCategories().then(function(response){
    expect(response).toEqual(['Lunch', 'Dessert']);
  });
  $httpBackend.flush();
});

it('should return category B', function(){
  $httpBackend.whenGET(ApiPath + '/menu_items.json?category=B').respond(['eggroll with cabbage, carrots and beef', 'Beef Egg Roll']);
  menuService.getMenuItems('B').then(function(response){
    expect(response).toEqual(['eggroll with cabbage, carrots and beef', 'Beef Egg Roll']);
  });
  $httpBackend.flush();
});

it('should find the menu item with name B1', function(){
  $httpBackend.whenGET(ApiPath+ '/menu_items/B1.json').respond(['eggroll with cabbage, carrots and beef']);
  menuService.getMenuItemByShortName('B1').then(function(response){
    expect(response).toEqual(['eggroll with cabbage, carrots and beef']);
  });
  $httpBackend.flush();
});


it('should give error when query menu item with name X1', function(){
$httpBackend.whenGET(ApiPath+ '/menu_items/X1.json').respond(500);
menuService.getMenuItemByShortName('x1').then(function(response){
},
function error(error){
  expect(error.status).toEqual(500);
});
$httpBackend.flush();
});

});
