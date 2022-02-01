const path = require("path");
const solc = require("solc");
const fs = require("fs-extra"); //file system extras

const buildPath = path.resolve(__dirname, "build");
// const contractFileName = "Campaign.sol";

//delete the entire build folder if it exists
fs.removeSync(buildPath);

//read Campaign.sol from contracts folder
const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
//read the source code of the file with encoding etf
const source = fs.readFileSync(campaignPath, "utf8");

/***
 * The recommended way to interface with the Solidity compiler, especially for more
 * complex and automated setups is the so-called JSON-input-output interface.
 *
 * See https://docs.soliditylang.org/en/v0.8.6/using-the-compiler.html#compiler-input-and-output-json-description
 * for more details.
 */
const input = {
  language: "Solidity",
  sources: {
    "Campaign.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["abi", "evm.bytecode"],
      },
    },
  },
};

// input.sources[contractFileName] = {
//   content: source,
// };

//use sol compiler to compile both contracts
const output = JSON.parse(solc.compile(JSON.stringify(input)));
// const contracts = output.contracts[contractFileName];

//write the output to the build directory
fs.ensureDirSync(buildPath); //ensure that the directory exists
// console.log(output);

// loop over output and write each contract to different file in build directory
if (output.errors) {
  output.errors.forEach((err) => {
    console.log(err.formattedMessage);
  });
} else {
  const contracts = output.contracts["Campaign.sol"];
  for (let contractName in contracts) {
    const contract = contracts[contractName];
    fs.writeFileSync(
      path.resolve(buildPath, `${contractName}.json`),
      JSON.stringify(contract.abi, null, 2),
      "utf8"
    );
  }
}
