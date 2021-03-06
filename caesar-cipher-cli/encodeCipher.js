const { alphabet, ALPHABET } = require("./data");

const encodeCipher = (shift, text) => {
  const decodeArr = text.split("");
  const encodeArr = decodeArr.map((item) => {
    if (alphabet.includes(item)) {
      return alphabet[(alphabet.indexOf(item) + shift) % alphabet.length];
    } else if (ALPHABET.includes(item)) {
      return ALPHABET[(ALPHABET.indexOf(item) + shift) % ALPHABET.length];
    } else {
      return item;
    }
  });
  return encodeArr.join("");
};

//encodeCipher(4, "Hello world!")

module.exports = {
  encodeCipher: encodeCipher,
};
