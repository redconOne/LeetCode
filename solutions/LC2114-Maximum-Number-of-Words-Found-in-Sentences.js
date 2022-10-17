const mostWordsFound = (sentences) => {
  let result = 0;
  for (let sentence of sentences) {
    let totalWords = sentence.split(' ').length;
    if (totalWords > result) result = totalWords;
  }
  return result;
};

const mostWordsFoundRefactor = (sentences) =>
  Math.max(...sentences.map((sentence) => sentence.split(' ').length));

// storing each strings word count in totalWords and comparing to see largest value

// REFACTOR - returning max value of the spread sentences array after sentences is mapped and converted to word lengths
