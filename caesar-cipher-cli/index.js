const { program } = require("commander");
const fs = require("fs");
const path = require("path");
const { Transform } = require('stream');
const { processCipher } = require("./processCipher");
const { encodeCipher } = require("./encodeCipher");
const { decodeCipher } = require("./decodeCipher");

program.storeOptionsAsProperties(true);

program
  .option("-a, --action <type>", "encode or decode operation")
  .option("-s, --shift <type>", "amount of shifted symbols")
  .option("-i, --input <type>", "input file")
  .option("-o, --output <type>", "output file")
  .parse(process.argv);

//console.log(program.action, program.shift, program.input, program.output);

if (!program.action || !program.shift) {
  console.error("Please, provide required arguements: action and shift");
  process.exit(1);
}

const readStream = program.input
  ? fs.createReadStream(path.join(__dirname, program.input))
  : process.stdin;

const writeStream = program.output
  ? fs.createWriteStream(path.join(__dirname, program.output))
  : process.stdout;


processCipher(readStream, writeStream, program.action, program.shift);
