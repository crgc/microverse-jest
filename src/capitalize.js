function capitalizeString(string) {
  return string[0].toUpperCase().concat(string.substring(1));
}

module.exports = capitalizeString;