const getWordLengths = function(someWords) {

  const wordLengths = someWords.map(words => words.length);
  return wordLengths;
  
};

module.exports = getWordLengths;