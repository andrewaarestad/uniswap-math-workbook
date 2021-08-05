
const readFile = require('util').promisify(require('fs').readFile);

const {waffle, network} = require("hardhat");
const { expect } = require("chai");
const provider = waffle.provider;
const hhConfig = require('../hardhat.config');
const {BigNumber} = require("ethers");

function bigNumberToDecimal(value, base = 18) {
  const divisor = BigNumber.from(10).pow(base);
  return value.mul(10000).div(divisor).toNumber() / 10000;
}

async function loadTestTransactionMetadata() {
  const file = await readFile('./.cache/test_tx.json', 'utf8');
  return JSON.parse(file);
}

async function assertBlockNumber(tx, numPreviousTransactions) {
  const currentBlockNumber = await provider.getBlockNumber();
  expect(currentBlockNumber).to.equal(tx.blockNumber + (numPreviousTransactions || 0),
    'HH mainnet fork must be set to block ' + tx.blockNumber + ' in hardhat.config.js:53');

}

async function resetHardhatFork() {
  await network.provider.request({
    method: "hardhat_reset",
    params: [
      {
        forking: {
          jsonRpcUrl: hhConfig.networks.hardhat.forking.url,
          blockNumber: hhConfig.networks.hardhat.forking.blockNumber,
        },
      },
    ],
  });
}

module.exports = {
  bigNumberToDecimal,
  loadTestTransactionMetadata,
  assertBlockNumber,
  resetHardhatFork,
  WETH_ADDRESS: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
}
