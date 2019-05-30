(function(){
  'use strict';
angular.module('Namecalc',[])
.controller('namecalccontroller',function($scope,$filter){
$scope.name="";
$scope.totalvalue=0;
$scope.displayNumeric=function()
  {
    var t=calcnum($scope.name);
    $scope.totalvalue=t;
  };
  $scope.Uprcase=function ()
  {
    var upcase = $filter('uppercase');
    $scope.name = upcase($scope.name);
  };
function calcnum(string)
{
  var ts=0;
  for(var i=0;i<string.length;i++)
  {
    ts+=string.charCodeAt(i);
  }
  return ts;
}
});

})();
