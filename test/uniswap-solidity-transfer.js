const {ethers} = require("hardhat");
const {bigNumberToDecimal, assertBlockNumber, loadTestTransactionMetadata, resetHardhatFork, WETH_ADDRESS} = require("./test-common");
const {BigNumber} = require("ethers");


async function deploy() {
  const contractFactory = await ethers.getContractFactory("SwapTest");
  const [owner, executor, _] = await ethers.getSigners();
  const contract = await contractFactory.deploy(executor.address, {value: ethers.utils.parseEther("5")});
  await contract.deployed();
  // console.log('deployed: %s', contract.address);

  // const WETH = await ethers.getVerifiedContractAt(WETH_ADDRESS);
  // await WETH.connect(contract.address).deposit({value: ethers.utils.parseEther('2')});

  return contract;
}



describe('Uniswap Solidity Transfer', () => {

  beforeEach(() => {
    return resetHardhatFork();
  })

  it('arb should transfer in solidity', async () => {

    const contract = await deploy();

    const [owner, executor, _] = await ethers.getSigners();

    const TRANSACTION = await loadTestTransactionMetadata();
    await assertBlockNumber(TRANSACTION, 1);

    const volume = BigNumber.from(TRANSACTION.volume);
    const minerReward = BigNumber.from(TRANSACTION.minerReward);
    const swap1Amount0 = BigNumber.from(TRANSACTION.buyTransactions[0].amount0Out);
    const swap1Amount1 = BigNumber.from(TRANSACTION.buyTransactions[0].amount1Out);
    const swap2Amount0 = BigNumber.from(TRANSACTION.sellTransaction.amount0Out);
    const swap2Amount1 = BigNumber.from(TRANSACTION.sellTransaction.amount1Out);



    // console.log('Prepared transaction to swap: ' + TRANSACTION.tokenSymbol);
    //
    // console.log('Send this much WETH to first market: ' + bigNumberToDecimal(volume));
    // console.log('swap 1: ' + bigNumberToDecimal(swap1Amount0) + ' / ' + bigNumberToDecimal(swap1Amount1));
    // console.log('swap 2: ' + bigNumberToDecimal(swap2Amount0) + ' / ' + bigNumberToDecimal(swap2Amount1));

    const result = await contract.connect(executor).swapDirect(
      volume,
      minerReward,
      TRANSACTION.targets,
      swap1Amount0,
      swap1Amount1,
      swap2Amount0,
      swap2Amount1);

    // console.log(result);
  });

});
