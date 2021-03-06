require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require("hardhat-tracer");
require("hardhat-etherscan-abi");
require("hardhat-tracer");
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

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
  solidity: {
    compilers: [
      {
        version: "0.4.18"
      },
      {
        version: "0.5.7"
      },
      {
        version: "0.6.12"
      },
      {
        version: "0.7.0"
      },
      {
        version: "0.8.4"
      }
    ]
  },
  // defaultNetwork: 'hardhat',
  networks: {
    // localhost: {
    //   url: 'http://127.0.0.1:8545/',
    //   chainId: 1
    // },
    hardhat: {
      chainId: 1,
      // loggingEnabled: true,
      forking: {
        enabled: true,
        url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
        blockNumber: 12962792
      }
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};

