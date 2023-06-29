import addBinary from '../tsSolutions/0067-Add-Binary';

test('Testing addBinary', () => {
  expect(addBinary('11', '1')).toStrictEqual('100');
  expect(addBinary('1010', '1011')).toStrictEqual('10101');
});
