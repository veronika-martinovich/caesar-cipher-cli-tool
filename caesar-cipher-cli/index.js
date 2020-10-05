const { program } = require("commander");
const fs = require("fs");
const path = require("path");
const { processCipher } = require("./processCipher");
const { validateArgs } = require("./validateArgs");
const { createTransformStream } = require("./createTransformStream");

program.storeOptionsAsProperties(false).passCommandToAction(false);
program
  .option("-a, --action <type>", "encode or decode operation")
  .option("-s, --shift <type>", "amount of shifted symbols")
  .option("-i, --input <type>", "input file")
  .option("-o, --output <type>", "output file")
  .parse(process.argv);

const programOptions = program.opts();
const { action, shift, input, output } = programOptions;

validateArgs(action, shift, input, output);

const readStream = input
  ? fs.createReadStream(path.join(__dirname, input), { encoding: "utf8" })
  : process.stdin;

const writeStream = output
  ? fs.createWriteStream(path.join(__dirname, output), {
      encoding: "utf8",
      flags: "a+",
    })
  : process.stdout;

const transformStream = createTransformStream(action, shift);

processCipher(readStream, writeStream, transformStream);
