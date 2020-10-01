const { pipeline } = require("stream");

const processCipher = (readable, writeable, action, shift) => {
  pipeline(
    readable,
    writeable,
    (err) => {
      if (err) {
        console.error("Pipeline failed.", err);
      } else {
        console.log("Pipeline succeeded.");
      }
    }
  );
};

module.exports = {
  processCipher: processCipher,
};
