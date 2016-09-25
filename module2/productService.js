(function() {
  'use strict';

angular
  .module('ShoppingListCheckOff')
  .service('ProductService', ProductService);

  function ProductService() {
      var productService = this;
      var itensBuy = [];
      var itensBought = [];

      loadData();

      // -------------------- public functions
      productService.getBuyItens = function() {
        return itensBuy;
      }

      productService.addBuyItem = function(item) {
        itensBuy.push(item);
      }

      productService.removeBuyItem = function(index) {
        itensBuy.splice(index,1);
      }



      productService.getBoughtItens = function() {
        return itensBought;
      }

      productService.addBoughtItem = function(item) {
        itensBought.push(item);
      }

      productService.removeBoughtItem = function(index) {
        itensBought.splice(index,1);
      }

      // -------------------- Helper function
      function loadData() {
        itensBuy.push({name: 'cookies', quantity: 5});
        itensBuy.push({name: 'pasta', quantity: 1});
        itensBuy.push({name: 'coffe', quantity: 10});
        itensBuy.push({name: 'sugar', quantity: 3});
        itensBuy.push({name: 'chocolate', quantity: 101});
      }
    }

  }());
