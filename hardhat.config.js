require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-etherscan");
const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString().trim();
const apiKey = fs.readFileSync(".secret").toString().trim();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async(taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    defaultNetwork: "BSCTestnet",
    networks: {
        hardhat: {},
        BSCTestnet: {
            url: "https://endpoints.omniatech.io/v1/bsc/testnet/public",
            accounts: [privateKey]
        },
        BSCNet: {
            url: "https://bsc-dataseed2.defibit.io",
            accounts: [privateKey]
        }
    },
    solidity: {
        compilers: [{
                version: "0.8.19",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            }
           
        ]
    },
    etherscan: {
        apiKey: apiKey
    },
};