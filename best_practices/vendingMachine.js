
var balanceManager = require('./balanceManager');
var changeHandler = require('./changeHandler');
//var productInventory = require('./productInventory');




module.exports = {
  canAfford: balanceManager.canAfford,

  decreaseBalance: balanceManager.decreaseBalance,

  getAmount: changeHandler.getAmount,

  getBalance: balanceManager.getBalance,

  getProducts: productInventory.getProducts,

  getProduct: productInventory.getProduct,
  
  increaseBalance: balanceManager.increaseBalance,

  releaseChange: changeHandler.releaseChange,

  insertCoin: function(coinType){
    var value = this.getAmount(coinType);
    this.increaseBalance(value);
  },

  isValidAmount: function(amount){
    if(amount === null){
      return false;
    } else {
      return true;
    }
  },

  vendProduct: function(productId){
    var product = this.getProduct(productId);
    this.decreaseBalance(product.price);
    return product;
  },

  releaseChange: function(){
    var currentBalance = this.getBalance();
    this.decreaseBalance(currentBalance);
    return this.convertToChange(currentBalance);
  }

};
