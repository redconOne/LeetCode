import lengthOfLastWord from '../tsSolutions/0058-Length-of-Last-Word';

test('Testing lengthOfLastWord', () => {
  expect(lengthOfLastWord('Hello World')).toBe(5);
  expect(lengthOfLastWord('   fly me    to   the moon  ')).toBe(4);
  expect(lengthOfLastWord('luffy is still joyboy')).toBe(6);
});
