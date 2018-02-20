function Airport() {
  this.planes = []
};

Airport.prototype.land = function(plane) {
  this.planes.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  if (this.planes.length === 0) {
    throw "No planes in airport"
  }
  else {
    for (var num = this.planes.length; num--;) {
      if (this.planes[num] === plane) {
        return this.planes.splice(num, 1)[0]
      };
    };
  };


};
