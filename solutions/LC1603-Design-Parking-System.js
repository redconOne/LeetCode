const ParkingSystem = function (big, medium, small) {
  this.big = big;
  this.medium = medium;
  this.small = small;
};

ParkingSystem.prototype.addCar = function (carType) {
  switch (true) {
    case carType === 1:
      if (this.big >= 1) {
        this.big--;
        return true;
      }
      return false;
      break;
    case carType === 2:
      if (this.medium >= 1) {
        this.medium--;
        return true;
      }
      return false;
      break;
    default:
      if (this.small >= 1) {
        this.small--;
        return true;
      }
      return false;
      break;
  }
};

// first setup constructor for Parking System object

// setting up prototype function for addCar()
// carType determines what variable we check.
// If var is greater than or equal to 1 we decrement and return true
// else we return false because no spots are available
