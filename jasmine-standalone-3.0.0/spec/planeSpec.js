describe("Plane", function() {
  var plane;
  beforeEach(function() {
    plane = new Plane();
  })

  it("has a variable status which is set to landed", function() {
    expect(plane.landed).toEqual(true);
  })

  

})
