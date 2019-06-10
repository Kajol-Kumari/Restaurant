(function(){
  'use strict';
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
function  ToBuyController (ShoppingListCheckOffService){
    var list1 = this;
    list1.buyItems = ShoppingListCheckOffService.getBuyItems();
    list1.itemName = "";
    list1.itemQuantity = "";
    list1.addItem= function(){
        ShoppingListCheckOffService.addItem(list1.itemName,list1.itemQuantity);
    };

    list1.addtoBoughtList =  function(itemIndex){
    ShoppingListCheckOffService.addtoBoughtList(itemIndex);
    };
}

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController (ShoppingListCheckOffService){
    var list2 = this;
    list2.boughtItems = ShoppingListCheckOffService.getBoughtItems();

    list2.itemQuantity = "";
    list2.itemName = "";

    // list2.addtoBoughtList =  function(itemIndex){
    // ShoppingListCheckOffService.addtoBoughtList(itemIndex);
    // };

  }
  function ShoppingListCheckOffService(){
    var service = this;
    var boughtItems = [];
    service.addItem = function(itemName,quantity){
      var item={
        name: itemName,
        quantity :quantity
      };
      buyItems.push(item);
  }

    var buyItems =[ {name: "cookies", quantity: '10'},
      {name: "Milk",quantity: ' 4 Bottles'},
      {name: "Cereal",quantity: '4 boxes'},
      {name: "Chocolates",quantity: '5 Packets'},
      {name: "Coke",quantity: '2 bottles'}
    ];

    service.addtoBoughtList = function(itemIndex){
     boughtItems.push(buyItems[itemIndex]);
       buyItems.splice(itemIndex, 1);
    };

    // service.moveElement = function (index, buyItems, boughtItems) {
    //   boughtItems.push(buyItems[index]);
    //   buyItems.splice(index, 1);
    // }

    service.getBuyItems = function(){
      return buyItems;
    };

    service.getBoughtItems = function(){
      return boughtItems;
    };
  }
})();
