import isValid from '../tsSolutions/0020-Valid-Parentheses';

test('Testing isValid', () => {
  expect(isValid('()')).toBe(true);
  expect(isValid('()[]{}')).toBe(true);
  expect(isValid('(]')).toBe(false);
  expect(isValid('(')).toBe(false);
});
