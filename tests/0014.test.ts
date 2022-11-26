import longestCommonPrefix from '../tsSolutions/0014-Longest-Common-Prefix';

test('Testing longestCommonPrefix', () => {
  expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toStrictEqual('fl');
  expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toStrictEqual('');
  expect(longestCommonPrefix(['c', 'acc', 'act'])).toStrictEqual('');
});
