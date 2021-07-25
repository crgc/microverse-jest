const capitalize = require('../capitalize');

test('capitalizes a string', () => {
  expect(capitalize('god')).toBe('God');
});