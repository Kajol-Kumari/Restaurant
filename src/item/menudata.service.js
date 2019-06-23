(function(){
'use strict';
angular.module('data')
        .service('MenuDataService',MenuDataService);

MenuDataService.$inject =['$http','ApiBasePath','$q']; //This service have 2 methods.
function MenuDataService($http, ApiBasePath, $q){
  var service = this;
  service.getAllCategories = function(){
    return $http({
        method: "GET",
        url :(ApiBasePath + "categories.json")
     })
     .then(function(response){
       return response.data;
     });
   };

  service.getItemsForCategory = function(categoryShortName){
    return $http({
                method : "GET",
                url : (ApiBasePath+"menu_items.json"),
                params:{
                category: categoryShortName
                }
              })
  .then(function(response){
      return response.data;
  });
};

}
})();
