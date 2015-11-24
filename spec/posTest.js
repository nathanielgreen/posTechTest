describe('pos', function(){

  beforeEach(function(){
    pos = new POS();
  });

  it("can return correct price totals", function(){
    pos.checkout(['A', 'B', 'P'], {'A':25, 'B':40, 'P':30})
    expect(pos.totalPrice).toEqual(95);
  });
  
  it("can apply the offer of 'Three for One Pound'", function(){
    pos.checkout(['B', 'A', 'B', 'P', 'B'], {'A':25, 'B':40, 'P':30}) 
    expect(pos.totalPrice).toEqual(155);
  });

  it("can apply the offer of 'Buy Two, get a Third Free'", function(){
    pos.checkout(["A", "A", "B"], {'A':25, 'B':40, 'P':30})
    console.log(pos.finalOrder);
    expect(pos.finalOrder).toEqual(["A', 'A', 'B", "A" ]);
  });

});
