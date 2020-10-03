# Caesar cipher CLI tool

**A tool to encode and decode a text by Caesar cipher**

To encode or decode text you should pass 4 options to CLI. Each option consists of name and value.
The options are:
1. -a, --action-type  
A value for this option should be a string operation name. There are two possible variants: "encode" and "decode".
1. -s, --shift  
A value for this option should be a number for the amount of shifted symbols.
1. -i, --input  
A value for this option should be an input file name.
1. -o, --output  
A value for this option should be an output file name.

**--action-type** and **--shift** options are required while **--input** and **--output** are not. If the **--input** or **--output** options are missed you should pass the text to and read the transformed text in the CLI.

To start the program you should run ```index.js``` file. The file is in the ```caesar-cipher-cli``` folder.

### Usage examples:

```$ node caesar-cipher-cli/index -a encode -s 7 -i "./input.txt" -o "./output.txt"```    
```$ node caesar-cipher-cli/index --action-type encode --shift 7 --input plain.txt --output encoded.txt```    
```$ node caesar-cipher-cli/index --action-type decode --shift 7 --input decoded.txt --output plain.txt```   