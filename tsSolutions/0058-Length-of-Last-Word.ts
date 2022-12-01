const lengthOfLastWord = (str: string): number => {
  return str.trim().split(' ').reverse()[0].length;
};

export default lengthOfLastWord;
