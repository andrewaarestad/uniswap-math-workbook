const {UniswapV2WethPair} = require("../build/UniswapV2WethPair");
const {assertBlockNumber, loadTestTransactionMetadata, resetHardhatFork, WETH_ADDRESS} = require("./test-common");
const {BigNumber} = require("ethers");
const {ethers} = require("hardhat");
const { expect } = require("chai");



describe('Uniswap Max Transfer', () => {

  beforeEach(() => {
    return resetHardhatFork();
  })

  it('arb should transfer maximum tokens possible in each leg', async() => {

    const [owner, executor, _] = await ethers.getSigners();

    // Load cached transaction metadata

    const TRANSACTION = await loadTestTransactionMetadata();
    const cm = TRANSACTION.crossedMarket;
    await assertBlockNumber(TRANSACTION);
    // console.log('Loaded tx: ', JSON.stringify(TRANSACTION, 0, 2));

    // Set up contracts

    const market1 = await ethers.getVerifiedContractAt(cm.buyFromMarket.marketAddress);
    const market2 = await ethers.getVerifiedContractAt(cm.sellToMarket.marketAddress);
    const WETH = await ethers.getVerifiedContractAt(WETH_ADDRESS);

    // Set up UniswapV2WethPairs

    const market1Reserves = await market1.getReserves();
    const market2Reserves = await market2.getReserves();
    const buyFromMarket = new UniswapV2WethPair(market1Reserves[0], market1Reserves[1]);
    const sellToMarket = new UniswapV2WethPair(market2Reserves[0], market2Reserves[1]);

    // Perform first leg of arb

    const firstLegVolume = BigNumber.from(TRANSACTION.volume);
    await WETH.connect(executor).deposit({value: firstLegVolume.add(ethers.utils.parseEther('1'))});
    await WETH.connect(executor).transfer(cm.buyFromMarket.marketAddress, firstLegVolume);

    // Perform second leg of arb

    const secondLegVolume = buyFromMarket.maxOutputT1(BigNumber.from(TRANSACTION.volume));

    // Attempt 1: max amt + 1 - expect revert

    await expect(market1.swap(secondLegVolume.add(BigNumber.from(0), BigNumber.from('1')), cm.sellToMarket.marketAddress, Buffer.from(''))).to.be.reverted;

    // Attempt 2: max amt + 0 - expect success

    await market1.swap(BigNumber.from(0), secondLegVolume, cm.sellToMarket.marketAddress, Buffer.from(''));

    // Perform third leg of arb
    const thirdLegVolume = sellToMarket.maxOutputT0(secondLegVolume);

    // Attempt 1: max amt + 1 - expect revert

    await expect(market2.swap(thirdLegVolume.add(BigNumber.from(1)), BigNumber.from(0), executor.address, Buffer.from(''))).to.be.reverted;

    // Attempt 2: max amt - expect success

    // TODO: This generates a Uniswap:K revert...
    await market2.swap(thirdLegVolume, BigNumber.from(0), executor.address, Buffer.from(''));

  })

})
