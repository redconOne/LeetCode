import { is } from '@babel/types';
import isPalindrome from '../tsSolutions/0009-Palindrome-Number';

test('Testing isPalindrome', () => {
  expect(isPalindrome(121)).toStrictEqual(true);
  expect(isPalindrome(-121)).toStrictEqual(false);
  expect(isPalindrome(10)).toStrictEqual(false);
});
