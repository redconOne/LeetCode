const sortSentence = (str) => {
  str = str.split(' ');
  const arr = new Array(str.length);

  for (let word of str)
    arr[+(word.replaceAll(/[a-z]/gi, '') - 1)] = word.replace(/[0-9]/, '');

  return arr.join(' ');
};
