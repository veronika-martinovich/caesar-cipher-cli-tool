const { pipeline } = require("stream");

const processCipher = (readStream, writeStream, transformStream) => {
  pipeline(readStream, transformStream, writeStream, (err) => {
    if (err) {
      console.error("Pipeline failed.", err);
    } else {
      console.log("Pipeline succeeded.");
    }
  });
};

module.exports = {
  processCipher: processCipher,
};
