import mySqrt from '../tsSolutions/0069-SqrtX';

test('Testing mySqrt', () => {
  expect(mySqrt(4)).toStrictEqual(2);
  expect(mySqrt(8)).toStrictEqual(2);
  expect(mySqrt(0)).toStrictEqual(0);
});
