const { pipeline } = require("stream");
const chalk = require("chalk");

const processCipher = (readStream, writeStream, transformStream) => {
  pipeline(readStream, transformStream, writeStream, (err) => {
    if (err) {
      console.error(chalk.red.inverse("Pipeline failed."), err);
    } else {
      console.log(chalk.green.inverse("Pipeline succeeded"));
    }
  });
};

module.exports = {
  processCipher: processCipher,
};
