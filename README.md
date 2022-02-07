# Solidity Snippets

## HardHat Setup
````
mkdir DIRECTORY
cd DIRECTORY
npm init -y
npm install --save-dev hardhat
npx hardhat
npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
npx hardhat accounts
npx hardhat compile
npx hardhat test
npx hardhat run scripts/run.js
````
````
// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract MyContract {
    constructor() {
        console.log("Yo yo, I am a contract and I am smart");
    }
}
````
`npm install @truffle/hdwallet-provider ganache-cli mocha solc fs-extra web3 dotenv`

`npm install next react react-dom`

`npm i --save semantic-ui-react`

`npm i --save semantic-ui-css`

`node ethereum/compile.js`

`node ethereum/deploy.js`

`npm run dev`
