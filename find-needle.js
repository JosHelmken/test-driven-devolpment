const findNeedle = function(words, givenWord) {
  const found = words.findIndex(word => word === givenWord);
  return found;
};

module.exports = findNeedle;