(function functionName() {
'use strict'

angular
  .module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.dishes = "";
    $scope.message = "";
    $scope.messageType = "";

    // NOT consider empty item, i.e., `, ,` as an item towards to the count.
    $scope.checkDishes = function() {
      var arrDishes = $scope.dishes.split(',');

      checkEmpty(arrDishes);

      // I´m verifying if the user does not put any dishes because of I´m checking ',' and ', ,'
      // consequently, checking if string is '' will work because return arrDishes.length == 0
      if (arrDishes.length == 0) {
        $scope.message = "Please enter data first";
        $scope.messageType = "ERROR";
      } else if (arrDishes.length <= 3) {
        $scope.message = "Enjoy!";
        $scope.messageType = "OK";
      } else {
        $scope.message = "Too much!";
        $scope.messageType = "OK";
      }
    }

    // =======================================
    // remove empty item from the array
    // empty item is '' and ' '
    function checkEmpty(arr) {
      while(arr.indexOf('') != -1) {
        var index = arr.indexOf('');
        if (index != -1) {
          arr.splice(index,1);
        }
      }

      while(arr.indexOf(' ') != -1) {
        var index = arr.indexOf(' ');
        if (index != -1) {
          arr.splice(index,1);
        }
      }
    }
  };
})();
