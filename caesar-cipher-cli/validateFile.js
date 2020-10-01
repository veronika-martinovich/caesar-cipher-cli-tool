const fs = require("fs");

const validateFile = (filePath) => {
  fs.stat(filePath, (error, stats) => {
    if (error || !stats || !stats.isFile()) {
      console.error("Please, provide correct file names");
      process.exit(2);
    }
  });
};

module.exports = {
  validateFile: validateFile,
};
