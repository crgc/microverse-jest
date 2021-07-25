class Calculator {
  add(a, b) { /* eslint-disable-line class-methods-use-this */
    return a + b;
  }

  substract(a, b) { /* eslint-disable-line class-methods-use-this */
    return a - b;
  }

  divide(a, b) { /* eslint-disable-line class-methods-use-this */
    if (b === 0) {
      throw new Error('Cannot divide by 0');
    }

    return a / b;
  }

  multiply(a, b) { /* eslint-disable-line class-methods-use-this */
    return a * b;
  }
}

module.exports = Calculator;