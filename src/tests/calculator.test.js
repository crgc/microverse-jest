const Calculator = require('../calculator');

describe('returns the sum of two numbers', () => {
  const calc = new Calculator();

  test('adds 0 + 1 to equal 1', () => {
    expect(calc.add(0, 1)).toBe(1);
  });

  test('adds 1 + 1 to equal 2', () => {
    expect(calc.add(1, 1)).toBe(2);
  });

  test('adds 2 + 2 to equal 4', () => {
    expect(calc.add(2, 2)).toBe(4);
  });
});

describe('returns the difference of two numbers', () => {
  const calc = new Calculator();

  test('substracts 0 - 1 to equal -1', () => {
    expect(calc.substract(0, 1)).toBe(-1);
  });

  test('substracts 1 - 1 to equal 0', () => {
    expect(calc.substract(1, 1)).toBe(0);
  });

  test('substracts 2 - 1 to equal 1', () => {
    expect(calc.substract(2, 1)).toBe(1);
  });
});

describe('returns the quotient of two numbers', () => {
  const calc = new Calculator();

  test('divide 4 / 2 to equal 2', () => {
    expect(calc.divide(4, 2)).toBe(2);
  });

  test('divide 2 / 2 to equal 1', () => {
    expect(calc.divide(2, 2)).toBe(1);
  });

  test('division by zero throws an Error', () => {
    expect(() => calc.divide(1, 0)).toThrow();
  });
});

describe('returns the product of two numbers', () => {
  const calc = new Calculator();

  test('multiplies 0 * 1 to equal 0', () => {
    expect(calc.multiply(0, 1)).toBe(0);
  });

  test('multiplies 1 * 1 to equal 1', () => {
    expect(calc.multiply(1, 1)).toBe(1);
  });

  test('multiplies 2 * 2 to equal 2', () => {
    expect(calc.multiply(2, 2)).toBe(4);
  });
});