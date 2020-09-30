const { program } = require("commander");
program.storeOptionsAsProperties(true);

program
  .option("-a, --action <type>", "encode or decode operation")
  .option("-s, --shift <type>", "amount of shifted symbols")
  .option("-i, --input <type>", "input file")
  .option("-o, --output <type>", "output file")
  .parse(process.argv);

console.log(program.action, program.shift, program.input, program.output);

if (!program.action || !program.shift) {
  console.error("Please, provide required arguements: action and shift");
  process.exit(1);
}
