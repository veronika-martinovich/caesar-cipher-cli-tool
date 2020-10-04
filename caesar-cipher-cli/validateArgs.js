const { validateFile } = require("./validateFile");
const path = require("path");
const chalk = require('chalk');

const validateArgs = (action, shift, input, output) => {
  if (!action || !shift) {
    console.error(chalk.red.inverse("Please, provide required arguments: action and shift"));
    process.exit(1);
  }
  if (!action.match(/^(en)|(de)code$/)) {
    console.error(chalk.red.inverse("Please, provide correct --action argument"));
    process.exit(1);
  }
  if (input) validateFile(path.join(__dirname, input));
  if (output) validateFile(path.join(__dirname, output));
};

module.exports = {
  validateArgs: validateArgs,
};
