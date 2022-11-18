const OrderedStream = function (n) {
  this.arr = new Array(n);
  this.ptr = 0;
};

OrderedStream.prototype.insert = function (idKey, value) {
  this.arr[idKey - 1] = value;
  let res = [];
  while (this.arr[this.ptr]) {
    res.push(this.arr[this.ptr]);
    this.ptr++;
  }
  return res;
};

// creating an ordered stream object that makes an empty array containing n spaces

// insert method pushes a value into idKey location
// keep in mind idKey is 1 based, not 0 based
// if the location pushed to is where pointer is located, we will return that value, including all values until pointer is incremented to an empty location
