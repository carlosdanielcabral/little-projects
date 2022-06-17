const inverterString = (string) => {
  let stringFinal = '';
  
  for (let i = string.length - 1; i >= 0; i -= 1) {
    stringFinal += string[i];
  }

  return stringFinal;
};

module.exports = inverterString;
