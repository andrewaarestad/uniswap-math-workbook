# Uniswap Math Workbook

This is a playground I created to experiment with Uniswap math.  Specifically, I wanted to explore why I was seeing transactions unexpectedly revert with "Uniswap:K".

## Usage

* create a `.env` file in the root folder and add:
  * ETHERSCAN_API_KEY
  * ALCHEMY_API_KEY
* `npm i -g hardhat-shorthand`
* `hh test`

## Background

This project stems from testing out the Flashbots simple-arbitrage bot: https://github.com/flashbots/simple-arbitrage

I wanted to test the arbs it was coming up with by simulating them with a hardhat mainnet fork.  I would get lots of reverted transactions and wanted to dig deeper into why.

This code will load a serialized arbitrage opportunity that was generated by running a fork of simple-arbitrage - I'll hopefully clean that up and post it some day. The bot will find an arb opportunity and cache it in `./cache/test_tx.json`

This cache contains the WETH pair that is being analyzed, the expected block height, crossed market addresses, token balances of the markets, etc.

The cached data is used in the two test files in this repo to define which pairs to trade on, what the initial trade volume should be, etc.

## TODO

* Support any token ordering in the markets (i.e. is it WETH/coin or coin/WETH) - this is in place for the solidity contract but not for the node.js transactions
* Implement solution for determining optimal trade volume - right now the trade volume is set by the simple-arbitrage logic which uses the naive volume search algorithm instead of solving the k curves
