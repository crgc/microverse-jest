const length = require('../length');

test('returns the length of a given string', () => {
  expect(length('Logo')).toBe(4);
});

describe('matching cities to foods', () => {
  test('a string of fewer than 1 character throws an Error', () => {
    expect(() => length('')).toThrow();
  });

  test('a string of more than 10 characters throws an Error', () => {
    expect(() => length('This will not go well!')).toThrow();
  });

  test('returns 3 for ABC string', () => {
    expect(length('ABC')).toBe(3);
  });
});