describe("Airport", function() {
  var airport;
  beforeEach(function() {
    airport = new Airport();
  });

  it("has a variable planes which is empty at start", function() {
    expect(airport.planes).toEqual([]);
  })

  describe('.land', function() {
    it('adds the passed plane to the planes array', function() {
      var plane = 'a plane'
      airport.land(plane);
      expect(airport.planes).toContain(plane)
    })
  })

  describe('.takeOff', function() {
    it('removes the passed plane from the planes array', function() {
      var plane = 'a plane'
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.planes).not.toContain(plane)
    })

    it('returns the plane that took off', function() {
      var plane = 'a plane'
      airport.land(plane);
      expect(airport.takeOff(plane)).toEqual(plane);
    })
  })

})
