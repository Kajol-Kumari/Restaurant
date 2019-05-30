(function() {
  'use strict';
  angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController)
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.list="";
    $scope.result="";
    $scope.msg={};
    $scope.box={};
    $scope.box.myStyle={"width":"400px"};
    $scope.message=function(){
      var items=$scope.list.split(',');
      var empty=$scope.list.split(' ');
      var emp2 = $scope.list.split(',,');
      var len=items.length-(empty.length+emp2.length);
      if($scope.list.length == 0)
      {
        $scope.result ="Please enter data first";
        $scope.msg.style={"color":"red"};
        $scope.box.myStyle={"border":"2px solid red","width":"400px"};
      }
      else
      {
          if(len < 2)
          {
            $scope.result = "Enjoy!";
            $scope.msg.style={"color":"green"};// message text-color
            $scope.box.myStyle={"border":"2px solid green","width":"400px"};// text-box border
          }
          else
          {
            $scope.result = "Too much!";
            $scope.msg.style={"color":"green"};//message text-color
            $scope.box.myStyle={"border":"2px solid green","width":"400px"};//  text-box border
          }
        }
    };
  };
})();
