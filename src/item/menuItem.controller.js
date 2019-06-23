(function () {
'use strict';

angular.module('data')
        .controller("MenuItemController",MenuItemController);
MenuItemController.$inject = ['items'];
function MenuItemController(items){
console.log("controller is called!");
var menuItem = this;
//var item = items.$stateParams.shortName;
menuItem.itemList = items.menu_items;
};

})();
