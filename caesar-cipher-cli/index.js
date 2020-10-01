const { program } = require("commander");
const fs = require("fs");
const path = require("path");
const { processCipher } = require("./processCipher");
const { validateArgs } = require("./validateArgs");
const { createTransformStream } = require("./createTransformStream");

program.storeOptionsAsProperties(true);

program
  .option("-a, --action-type <type>", "encode or decode operation")
  .option("-s, --shift <type>", "amount of shifted symbols")
  .option("-i, --input <type>", "input file")
  .option("-o, --output <type>", "output file")
  .parse(process.argv);

const { actionType, shift, input, output } = program;

validateArgs(actionType, shift, input, output);

const readStream = input
  ? fs.createReadStream(path.join(__dirname, input))
  : process.stdin;

const writeStream = output
  ? fs.createWriteStream(path.join(__dirname, output), { flags: "a+" })
  : process.stdout;

const transformStream = createTransformStream(actionType, shift);

processCipher(readStream, writeStream, transformStream);
