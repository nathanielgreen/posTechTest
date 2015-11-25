function Checkout(){
  this.totalPrice = 0;
  this.pricing = {'A':25, 'B':40, 'P':30} 
  this.priceArr = new Array();
  this.finalOrder = []
};

Checkout.prototype.scan = function(order){
  if (this.threeForOne(order)){
    this.priceLoop(order);
    this.totalPrice -= 20;
  }
  else if (this.twoGetThirdFree(order)){
    this.priceLoop(order);  
    this.finalOrder.push('A');
  } 
  else {
    this.priceLoop(order);
  };
  this.calculateTotalPrice();
};

Checkout.prototype.calculateTotalPrice = function(){
  for (i = 0; i < this.priceArr.length; i++){
    this.totalPrice += parseInt(this.priceArr[i]);
  };
};


Checkout.prototype.threeForOne = function(order){
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


Checkout.prototype.twoGetThirdFree = function(order){
  var counter = 0;
  for (var i = 0; i < order.length; i++) {
    if (order[i] === 'A'){
      counter++
    }
  };
  if (counter === 2) {
   return true
  }; 
};


Checkout.prototype.priceLoop = function(order){
  this.finalOrder.push(order.join("', '"));
  for (i = 0; i < order.length; i++){
    this.priceArr.push(this.pricing[order[i]]);
  };
};

Checkout.prototype.total = function(){
  return this.totalPrice;
};

