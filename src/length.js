function stringLength(string) {
  const { length } = string;
  if (length >= 1 && length <= 10) {
    return length;
  }
  throw new Error('String parameter has to have at least 1 character but no more than 10');
}

module.exports = stringLength;