const { program } = require("commander");
const fs = require("fs");
const path = require("path");
const { Transform } = require("stream");
const { processCipher } = require("./processCipher");
const { encodeCipher } = require("./encodeCipher");
const { decodeCipher } = require("./decodeCipher");

program.storeOptionsAsProperties(true);

program
  .option("-a, --action-type <type>", "encode or decode operation")
  .option("-s, --shift <type>", "amount of shifted symbols")
  .option("-i, --input <type>", "input file")
  .option("-o, --output <type>", "output file")
  .parse(process.argv);

if (!program.actionType || !program.shift) {
  console.error("Please, provide required arguments: action and shift");
  process.exit(1);
}

const readStream = program.input
  ? fs.createReadStream(path.join(__dirname, program.input))
  : process.stdin;

const writeStream = program.output
  ? fs.createWriteStream(path.join(__dirname, program.output), { flags: 'a+' })
  : process.stdout;

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    const data = chunk.toString();
    let transformedData;
    if (program.actionType === "encode") {
      transformedData = encodeCipher(Number(program.shift), data);
    } else if (program.actionType === "decode") {
      transformedData = decodeCipher(Number(program.shift), data);
    }
    this.push(transformedData);
    callback();
  },
});

processCipher(readStream, writeStream, transformStream);
