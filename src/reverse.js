function reverseString(string) {
  const { length } = string;

  if (length > 1) {
    let [left, right] = [0, length - 1];
    const chars = string.split('');

    while (left < right) {
      const tmp = chars[left];
      chars[left] = chars[right];
      chars[right] = tmp;

      left += 1;
      right -= 1;
    }

    return chars.join('');
  }
  return string;
}

module.exports = reverseString;