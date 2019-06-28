(function(){
'use strict';
angular.module('public')
        .controller('myInfoController',myInfoController);

myInfoController.$inject = ['SignUpDataService', 'ApiPath'];

function myInfoController(SignUpDataService, ApiPath){
  var $ctrl = this;
  $ctrl.userPref = SignUpDataService.getUserPref();
  $ctrl.basePath = ApiPath;
}

})();
