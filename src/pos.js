function POS(){
  this.totalPrice = 0;
  this.priceArr = new Array();
  this.finalOrder = []
};

POS.prototype.checkout = function(order, pricing){
  if (this.threeForOne(order)){
    this.priceLoop(order, pricing);
    this.totalPrice -= 20;
  }
  else if (this.twoGetThirdFree) {
    this.priceLoop(order, pricing);  
    this.finalOrder.push('A');
  } 
  else {
    this.priceLoop(order, pricing);
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


POS.prototype.twoGetThirdFree = function(){
  var counter = 0;
  for (var i = 0; i < order.length; i++) {
    if (order[i] === 'A'){
      counter++
    }
  };
  if (counter == 2) {
   return true
  }; 
};


POS.prototype.priceLoop = function(order, pricing){
  this.finalOrder.push(order.join("', '"));
  for (i = 0; i < order.length; i++){
    this.priceArr.push(pricing[order[i]]);
  };
};



// function Checkout(){
// 
// };
// 
// Checkout.prototype.scan = function(itemCode){
// 
// };

