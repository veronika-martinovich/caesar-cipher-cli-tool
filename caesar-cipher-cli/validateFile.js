const fs = require("fs");
const chalk = require("chalk");

const validateFile = (filePath) => {
  fs.stat(filePath, (error, stats) => {
    if (error || !stats || !stats.isFile()) {
      console.error(chalk.red.inverse("Please, provide correct file names"));
      process.exit(1);
    }
  });
};

module.exports = {
  validateFile: validateFile,
};
