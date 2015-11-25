describe('checkout', function(){

  beforeEach(function(){
    checkout = new Checkout();
  });

  it("can return correct price totals", function(){
    checkout.scan(['A', 'B', 'P'])
    expect(checkout.total()).toEqual(95);
  });
  
  it("can apply the offer of 'Three for One Pound'", function(){
    checkout.scan(['B', 'A', 'B', 'P', 'B']) 
    expect(checkout.total()).toEqual(155);
  });

  it("can apply the offer of 'Buy Two, get a Third Free'", function(){
    checkout.scan(["A", "A", "B"])
    console.log(checkout.finalOrder);
    expect(checkout.finalOrder).toEqual(["A', 'A', 'B", "A" ]);
  });

});
