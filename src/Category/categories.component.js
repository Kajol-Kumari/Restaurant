(function () {
'use strict';

angular.module('MenuApp')
        .component('categoryList',{
        templateUrl: 'src/template/menu.template.html',
        bindings : {
          items : '<',
        }
});


})();
