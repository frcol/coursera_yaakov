(function() {
  'use strict';

angular
  .module('ShoppingListCheckOff')
  .controller('ProductListBuy', ProductListBuy)
  .controller('ProductListBought', ProductListBought);

  //==================================================
  ProductListBuy.$inject = ['ProductService'];
  function ProductListBuy(ProductService) {
    var listBuy = this;

    listBuy.itens = ProductService.getBuyItens();

    listBuy.removeItem = function(index, item) {
      ProductService.addBoughtItem(item);
      ProductService.removeBuyItem(index);
    }
  }

  //==================================================
  ProductListBought.$inject = ['ProductService'];
  function ProductListBought(ProductService) {
    var  listBought = this;

    listBought.itens = ProductService.getBoughtItens();

    listBought.removeItem = function(index, item) {
      ProductService.removeBoughtItem(index);
      ProductService.addBuyItem(item);
    }
  }
}());
