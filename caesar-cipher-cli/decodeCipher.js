const { alphabet, ALPHABET } = require("./data");

const decodeCipher = (shift, text) => {
  const encodeArr = text.split("");
  const decodeArr = encodeArr.map((item) => {
    if (alphabet.includes(item)) {
      const index = alphabet.indexOf(item) - shift;
      if (index < 0) {
        return alphabet[alphabet.length + index];
      }
      return alphabet[index];
    } else if (ALPHABET.includes(item)) {
      const index = ALPHABET.indexOf(item) - shift;
      if (index < 0) {
        return ALPHABET[ALPHABET.length + index];
      }
      return ALPHABET[index];
    } else {
      return item;
    }
  });
  console.log('start', decodeArr.join(""));
  return decodeArr.join("");
};

module.exports = {
  decodeCipher: decodeCipher,
};
