function POS(){
  this.totalPrice = 0;
  this.priceArr = new Array();
};

POS.prototype.checkout = function(order, pricing) {
  if (this.threeForOne(order)){
    for (i = 0; i < order.length; i++){
      this.priceArr.push(pricing[order[i]]);
    };
    this.totalPrice -= 20;
  } 
  else {
    for (i = 0; i < order.length; i++){
      this.priceArr.push(pricing[order[i]]);
    };
  };

  for (i = 0; i < this.priceArr.length; i++){
    this.totalPrice += parseInt(this.priceArr[i]);
  };
};

POS.prototype.threeForOne = function(order){
  var counter = 0;
  for (var i = 0; i < order.length; i++) {
    if (order[i] === 'B'){
      counter++
    }
  };
  if (counter == 3) {
   return true
  }; 
};


function Checkout(){

};

Checkout.prototype.scan = function(itemCode){

};

