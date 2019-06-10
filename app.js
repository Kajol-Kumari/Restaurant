(function(){
  'use strict';
angular.module('Namecalc',[])
// .controller('Parentcontroller1',Parentcontroller1)
// .controller('Childcontroller1',Childcontroller1);
.controller('MenuCategoriesController',MenuCategoriesController)
.service('MenuCategoriesService',MenuCategoriesService)
.constant('ApiBase',"http://davids-restaurant.herokuapp.com")
.directive('listItem',ListItem);


  function ListItem(){
  var ddo = {
    templateUrl : 'list.html',
    scope : {
      items : '<',
      badRemove : '='
    },
    // controller : shoppingListDirective,
    // controllerAs : 'list',
    // bindToController : true
  };
  return ddo;
}
MenuCategoriesController.$inject = ['MenuCategoriesService'];
function MenuCategoriesController(MenuCategoriesService){
  var menu = this;
  var promise = MenuCategoriesService.getMenuCategories();

  promise.then(function(response){
    menu.categories = response.data;
  })
  .catch(function(error){
    console.log("Some error occurred!!");
  });

  menu.LogMenuItems = function(shortName){
    var promise = MenuCategoriesService.getMenuForCategories(shortName);

    promise.then(function(response){
      console.log(response.data);
    })
    .catch(function(error){
      console.log(error);
    })
  };
}

MenuCategoriesService.$inject = ['$http','ApiBase']
function MenuCategoriesService($http,ApiBase){
  var service = this;

  service.getMenuCategories = function(){
    var response = $http({
      method : "GET",
      url : (ApiBase + "/categories.json")
    });
    return response;
  }

  service.getMenuForCategories = function(shortName){
    var response = $http({
      method : "GET",
      url : (ApiBase + "/menu_items.json"),
      params : {
        category : shortName
      }
    });
    return response;
  };
// config.$inject =['shoppingListServiceProvider'];
// function config(shoppingListServiceProvider){
//   shoppingListServiceProvider.defaults.maxItems=2;
// }
/*.filter('loves',LovesFilter)
.filter('truth',TruthFilter); MAKING CUSTOM FILTERS!*/

// shoppingListController.$inject = ['shoppingListService'];
// function shoppingListController(shoppingListService){
// var list = this;  //p1 is same as that in index.html
//
// list.items = shoppingListService.getItems();
// list.itemName ="";
// list.itemQuantity="";
//
// list.addItem= function(){
//   shoppingListService.addItem(list.itemName, list.itemQuantity);
// };
//
//   list.removeItem = function(itemIndex){
//     shoppingListService.removeItem(itemIndex);
//   };
// }
//
// shoppingListService.$inject=['$q','weightLossFilterService']
// function shoppingListService($q,weightLossFilterService){
//   var service = this;
//   var items = [];
//   service.addItem = function(itemName,quantity){
//
//     var namePromise = weightLossFilterService.checkName(name);
//     var quantityPromise = weightLossFilterService.checkQuantity(quantity);
//
//     $q.all([namePromise,quantityPromise])
//     .then(function(response){
//       var item={
//         name: itemName,
//         quantity :quantity
//       };
//       items.push(item);
//     })
//     .catch(function(errorResponse){
//       console.log(errorResponse.message);
//     });
// };
//
  service.removeItem= function(itemIndex){
  console.log("'this' is: ",this);
  this.lastRemoved = "Last item removed was "+this.items[itemIndex].name;
  items.splice(itemIndex, 1);
};
}
//
//   service.getItems = function(){
//     return items;
//   };
// }
//
//
// weightLossFilterService.$inject = ['$q','$timeout'];
// function weightLossFilterService($q,$timeout){
//   var service = this;
//
//   service.checkName = function(name){
//     var deferred = $q.defer();
//
//     var result = {
//       message : ""
//   };
//
//   $timeout(function(){
//
//     if(name.toLowerCase().indexOf('cookie') === -1)
//     {
//       deferred.resolve(result);
//     }
//     else{
//       result.message = " word cookie found!";
//       deferred.reject(result);
//     }
//   },3000);
//   return deferred.promise;
// };
//
// service.checkQuantity = function(quantity){
//   var deferred = $q.defer();
//
//   var result = {
//     message : ""
// };
//
// $timeout(function(){
//
//   if(quantity < 6){
//     deferred.resolve(result);
//   }
//   else {
//     result.message = "Too much!!";
//     deferred.reject(result);
//   }
// },1000);
// return deferred.promise;
// };
// }

// function shoppingListServiceProvider(){
//   var provider = this;
//
//   provider.defaults = {
//     maxItems : 10
//   };
//
//   provider.$get = function(){
//   var shoppingList = new shoppingListService(provider.defaults.maxItems);
//
//   return shoppingList;
//   };
// }

//$scope.shoppingList = shoppingList;
// $scope.firstName="Kajol";
// //$scope.fullName="";
// $scope.showNumofwatchers = function(){
//   console.log("# of watchers :", $scope.$$watchersCount);
// };
//
// $scope.setFullName = function(){
//   $scope.fullName = $scope.firstName + " "+ "Singh";
// };
//
// $scope.logFirstName = function(){
//   console.log("First name is :",$scope.firstName);
// };
//
// $scope.logFulName = function(){
// console.log("Full name is :",$scope.fullName);
// };
/*  $scope.counter= 0;
  $scope.upCounter = function(){ USING $timeout inbuilt variable
  $timeout(function(){
    $scope.counter++;
    console.log("Counter incremented!");
  },2000);
};
$scope.upCounter=function(){  USING $APPLY TO CALL DIGEST CYCLE
    setTimeout(function(){
      $scope.$apply(function(){
      $scope.counter++;
      console.log("Counter Incremented!");
      });
    },2000);
  };
  $scope.upCounter= function(){     DIRECTLY CALLING DIGEST CYCLE USING "$digest"
    setTimeout(function(){
        $scope.counter++;
        console.log("counter incremented!");
        $scope.$digest();
    },2000);
  };
  $scope.sayMessage=function(){
  var msg="I am learning custom filter!";
  return msg;
};
  $scope.sayLovesMessage=function(){
    var msg="I am learning custom filter!";
    msg=lovesFilter(msg);
    return msg;
};*/
/*function LovesFilter(){
  return function(input){
    input=input || "";
    input=input.replace("learning","loving");
    return input;
  };
}
function TruthFilter(){
  return function(input,target,replace){
    input=input || "";
    input=input.replace(target,replace);
    return input;
  };
}*/

})();
