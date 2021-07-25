function reverseString(string) {
  const length = string.length;
  
  if(length > 1) {
    let [left, right] = [0, length - 1];
    let chars = string.split('');

    while(left < right) {
      const tmp = chars[left];
      chars[left] = chars[right];
      chars[right] = tmp;

      left++;
      right--;
    }

    return chars.join('');
  } else {
    return string;
  }
}

module.exports = reverseString;