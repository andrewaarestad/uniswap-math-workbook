//SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import "hardhat/console.sol";


// a library for performing overflow-safe math, courtesy of DappHub (https://github.com/dapphub/ds-math)

library SafeMathUniswap {
    function add(uint x, uint y) internal pure returns (uint z) {
        require((z = x + y) >= x, 'ds-math-add-overflow');
    }

    function sub(uint x, uint y) internal pure returns (uint z) {
        require((z = x - y) <= x, 'ds-math-sub-underflow');
    }

    function mul(uint x, uint y) internal pure returns (uint z) {
        require(y == 0 || (z = x * y) / y == x, 'ds-math-mul-overflow');
    }
}

interface IUniswapV2Pair {
    event Approval(address indexed owner, address indexed spender, uint value);
    event Transfer(address indexed from, address indexed to, uint value);

    function name() external pure returns (string memory);
    function symbol() external pure returns (string memory);
    function decimals() external pure returns (uint8);
    function totalSupply() external view returns (uint);
    function balanceOf(address owner) external view returns (uint);
    function allowance(address owner, address spender) external view returns (uint);

    function approve(address spender, uint value) external returns (bool);
    function transfer(address to, uint value) external returns (bool);
    function transferFrom(address from, address to, uint value) external returns (bool);

    function DOMAIN_SEPARATOR() external view returns (bytes32);
    function PERMIT_TYPEHASH() external pure returns (bytes32);
    function nonces(address owner) external view returns (uint);

    function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external;

    event Mint(address indexed sender, uint amount0, uint amount1);
    event Burn(address indexed sender, uint amount0, uint amount1, address indexed to);
    event Swap(
        address indexed sender,
        uint amount0In,
        uint amount1In,
        uint amount0Out,
        uint amount1Out,
        address indexed to
    );
    event Sync(uint112 reserve0, uint112 reserve1);

    function MINIMUM_LIQUIDITY() external pure returns (uint);
    function factory() external view returns (address);
    function token0() external view returns (address);
    function token1() external view returns (address);
    function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast);
    function price0CumulativeLast() external view returns (uint);
    function price1CumulativeLast() external view returns (uint);
    function kLast() external view returns (uint);

    function mint(address to) external returns (uint liquidity);
    function burn(address to) external returns (uint amount0, uint amount1);
    function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data) external;
    function skim(address to) external;
    function sync() external;

    function initialize(address, address) external;
}

interface IERC20 {

    event Approval(address indexed owner, address indexed spender, uint value);
    event Transfer(address indexed from, address indexed to, uint value);

    function name() external view returns (string memory);
    function symbol() external view returns (string memory);
    function decimals() external view returns (uint8);
    function totalSupply() external view returns (uint);
    function balanceOf(address owner) external view returns (uint);
    function allowance(address owner, address spender) external view returns (uint);

    function approve(address spender, uint value) external returns (bool);
    function transfer(address to, uint value) external returns (bool);
    function transferFrom(address from, address to, uint value) external returns (bool);
}

interface IWETH is IERC20 {
    function deposit() external payable;
    function withdraw(uint) external;
}

contract SwapTest {

    using SafeMathUniswap  for uint;

    address private immutable owner;
    address private immutable executor;

    IWETH private constant WETH = IWETH(0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2);

    modifier onlyExecutor() {
        require(msg.sender == executor, "onlyExecutor");
        _;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "onlyOwner");
        _;
    }

    constructor(address _executor) payable {
        owner = msg.sender;
        executor = _executor;
        if (msg.value > 0) {
            uint amount = msg.value / 2;
            WETH.deposit{value: amount}();
        }
    }

    function swapDirect(
        uint256 _wethAmountToFirstMarket,
        uint256 _ethAmountToCoinbase,
        address[] memory _targets,
        uint256 swap1Amount0,
        uint256 swap1Amount1,
        uint256 swap2Amount0,
        uint256 swap2Amount1) external onlyExecutor payable {

//        console.log('swapDirect called with params: ');
//        console.log(' - _wethAmountToFirstMarket: %s', _wethAmountToFirstMarket);
//        console.log(' - _ethAmountToCoinbase: %s', _ethAmountToCoinbase);
//        console.log(' - _targets[0]: %s', _targets[0]);
//        console.log(' - _targets[1]: %s', _targets[1]);
//        console.log(' - swap1Amount0: %s', swap1Amount0);
//        console.log(' - swap1Amount1: %s', swap1Amount1);
//        console.log(' - swap2Amount0: %s', swap2Amount0);
//        console.log(' - swap2Amount1: %s', swap2Amount1);
//        console.log(' - testAccount: %s', testAccount);

        uint256 myWethBalanceStart = WETH.balanceOf(address(this));

        safeTransferWeth(_targets[0], _wethAmountToFirstMarket);

        IUniswapV2Pair pair1 = IUniswapV2Pair(_targets[0]);
        IUniswapV2Pair pair2 = IUniswapV2Pair(_targets[1]);

//        console.log('calling swap1: %s, %s', swap1Amount0, swap1Amount1);
        pair1.swap(swap1Amount0, swap1Amount1, address(pair2), "");

//        console.log('calling swap2: %s, %s', swap2Amount0, swap2Amount1);
        pair2.swap(swap2Amount0, swap2Amount1, address(this), "");

        uint256 _wethBalanceAfter = WETH.balanceOf(address(this));
        require(_wethBalanceAfter > myWethBalanceStart + _ethAmountToCoinbase, "No profit made");
        if (_ethAmountToCoinbase == 0) return;

        uint256 _ethBalance = address(this).balance;
        if (_ethBalance < _ethAmountToCoinbase) {
            WETH.withdraw(_ethAmountToCoinbase - _ethBalance);
        }
        block.coinbase.transfer(_ethAmountToCoinbase);
    }

    function safeTransferWeth(address target, uint256 amount) private {
        uint256 targetBalanceStart = WETH.balanceOf(target);
        WETH.transfer(target, amount);
        uint256 targetBalanceEnd = WETH.balanceOf(target);
        uint256 diff = targetBalanceEnd - targetBalanceStart;
        require(diff - amount == 0, 'transfer failed');
    }
}
