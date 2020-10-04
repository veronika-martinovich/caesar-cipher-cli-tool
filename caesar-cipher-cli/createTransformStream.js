const { Transform } = require("stream");
const { encodeCipher } = require("./encodeCipher");
const { decodeCipher } = require("./decodeCipher");
const os = require("os");

const createTransformStream = (action, shift) => {
  return new Transform({
    transform(chunk, encoding, callback) {
      const data = chunk.toString();
      let transformedData;
      if (action === "encode") {
        transformedData = encodeCipher(Number(shift), data);
      } else if (action === "decode") {
        transformedData = decodeCipher(Number(shift), data);
      }
      this.push(transformedData);
      this.push(os.EOL);
      callback();
    },
  });
};

module.exports = {
  createTransformStream: createTransformStream,
};
