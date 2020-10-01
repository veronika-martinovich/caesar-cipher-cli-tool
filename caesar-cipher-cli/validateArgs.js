const { validateFile } = require("./validateFile");
const path = require("path");

const validateArgs = (actionType, shift, input, output) => {
  if (!actionType || !shift) {
    console.error("Please, provide required arguments: action and shift");
    process.exit(1);
  }
  if (input) validateFile(path.join(__dirname, input));
  if (output) validateFile(path.join(__dirname, output));
};

module.exports = {
  validateArgs: validateArgs,
};
