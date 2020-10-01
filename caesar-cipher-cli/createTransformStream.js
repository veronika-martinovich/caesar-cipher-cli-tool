const { Transform } = require("stream");
const { encodeCipher } = require("./encodeCipher");
const { decodeCipher } = require("./decodeCipher");

const createTransformStream = (actionType, shift) => {
  return new Transform({
    transform(chunk, encoding, callback) {
      const data = chunk.toString();
      let transformedData;
      if (actionType === "encode") {
        transformedData = encodeCipher(Number(shift), data);
      } else if (actionType === "decode") {
        transformedData = decodeCipher(Number(shift), data);
      }
      this.push(transformedData);
      callback();
    },
  });
};

module.exports = {
  createTransformStream: createTransformStream,
};
