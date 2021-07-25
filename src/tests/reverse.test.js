const reverse = require('../reverse');

test('returns a reversed string', () => {
  expect(reverse('Logo')).toBe('ogoL');
});