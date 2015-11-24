describe('pos', function(){

  beforeEach(function(){
    pos = new POS();
  });

  it("can return correct price totals", function(){
    pos.checkout(['B', 'A', 'B', 'P', 'B'], {'A':25, 'B':40, 'P':30})
    expect(pos.totalPrice).toEqual(155);
  });
  
  it("can apply the offer of 'Three for One Pound'", function(){
    pos.checkout(['B', 'B', 'B'], {'A':25, 'B':40, 'P':30}) 
    expect(pos.totalPrice).toEqual(100);
  });

});
