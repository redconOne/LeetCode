const minimumSum = (num) => {
  num = num.toString().split('').sort();
  return +(num[0] + num[2]) + +(num[1] + num[3]);
};

// this works for any four digit number
// first we sort the digits for easy manipulation

// we know that there is no scenario where 1 digit + 3 is lesser than 2 + 2:
// EG - 1234    it is impossible for 1 + 234 or any other combo to be less than 12 + 34

// knowing this, we know that it must be a couple digits plus another couple
// the way to make the smallest couple of digits is to first populate the "tens" place
// so var1 needs to be nums[0] + something and var2 needs to be nums[1] + something
// the "ones" place doesn't matter due to the additive properties. So we can use whatever digits are remaining however we want
