
const WETH_ABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}];
const ERC20_ABI = [
  {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [
      {
        name: '',
        type: 'string'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: '_spender',
        type: 'address'
      },
      {
        name: '_value',
        type: 'uint256'
      }
    ],
    name: 'approve',
    outputs: [
      {
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: '_from',
        type: 'address'
      },
      {
        name: '_to',
        type: 'address'
      },
      {
        name: '_value',
        type: 'uint256'
      }
    ],
    name: 'transferFrom',
    outputs: [
      {
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        name: '',
        type: 'uint8'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '_owner',
        type: 'address'
      }
    ],
    name: 'balanceOf',
    outputs: [
      {
        name: 'balance',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        name: '',
        type: 'string'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: '_to',
        type: 'address'
      },
      {
        name: '_value',
        type: 'uint256'
      }
    ],
    name: 'transfer',
    outputs: [
      {
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '_owner',
        type: 'address'
      },
      {
        name: '_spender',
        type: 'address'
      }
    ],
    name: 'allowance',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    payable: true,
    stateMutability: 'payable',
    type: 'fallback'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'owner',
        type: 'address'
      },
      {
        indexed: true,
        name: 'spender',
        type: 'address'
      },
      {
        indexed: false,
        name: 'value',
        type: 'uint256'
      }
    ],
    name: 'Approval',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'from',
        type: 'address'
      },
      {
        indexed: true,
        name: 'to',
        type: 'address'
      },
      {
        indexed: false,
        name: 'value',
        type: 'uint256'
      }
    ],
    name: 'Transfer',
    type: 'event'
  }
];

const UNISWAP_PAIR_ABI = [
  {
    inputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
  }, {
    anonymous: false,
    inputs: [{indexed: true, internalType: 'address', name: 'owner', type: 'address'}, {
      indexed: true,
      internalType: 'address',
      name: 'spender',
      type: 'address'
    }, {indexed: false, internalType: 'uint256', name: 'value', type: 'uint256'}],
    name: 'Approval',
    type: 'event'
  }, {
    anonymous: false,
    inputs: [{indexed: true, internalType: 'address', name: 'sender', type: 'address'}, {
      indexed: false,
      internalType: 'uint256',
      name: 'amount0',
      type: 'uint256'
    }, {indexed: false, internalType: 'uint256', name: 'amount1', type: 'uint256'}, {
      indexed: true,
      internalType: 'address',
      name: 'to',
      type: 'address'
    }],
    name: 'Burn',
    type: 'event'
  }, {
    anonymous: false,
    inputs: [{indexed: true, internalType: 'address', name: 'sender', type: 'address'}, {
      indexed: false,
      internalType: 'uint256',
      name: 'amount0',
      type: 'uint256'
    }, {indexed: false, internalType: 'uint256', name: 'amount1', type: 'uint256'}],
    name: 'Mint',
    type: 'event'
  }, {
    anonymous: false,
    inputs: [{indexed: true, internalType: 'address', name: 'sender', type: 'address'}, {
      indexed: false,
      internalType: 'uint256',
      name: 'amount0In',
      type: 'uint256'
    }, {indexed: false, internalType: 'uint256', name: 'amount1In', type: 'uint256'}, {
      indexed: false,
      internalType: 'uint256',
      name: 'amount0Out',
      type: 'uint256'
    }, {indexed: false, internalType: 'uint256', name: 'amount1Out', type: 'uint256'}, {
      indexed: true,
      internalType: 'address',
      name: 'to',
      type: 'address'
    }],
    name: 'Swap',
    type: 'event'
  }, {
    anonymous: false,
    inputs: [{indexed: false, internalType: 'uint112', name: 'reserve0', type: 'uint112'}, {
      indexed: false,
      internalType: 'uint112',
      name: 'reserve1',
      type: 'uint112'
    }],
    name: 'Sync',
    type: 'event'
  }, {
    anonymous: false,
    inputs: [{indexed: true, internalType: 'address', name: 'from', type: 'address'}, {
      indexed: true,
      internalType: 'address',
      name: 'to',
      type: 'address'
    }, {indexed: false, internalType: 'uint256', name: 'value', type: 'uint256'}],
    name: 'Transfer',
    type: 'event'
  }, {
    constant: true,
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{internalType: 'bytes32', name: '', type: 'bytes32'}],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }, {
    constant: true,
    inputs: [],
    name: 'MINIMUM_LIQUIDITY',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }, {
    constant: true,
    inputs: [],
    name: 'PERMIT_TYPEHASH',
    outputs: [{internalType: 'bytes32', name: '', type: 'bytes32'}],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }, {
    constant: true,
    inputs: [{internalType: 'address', name: '', type: 'address'}, {
      internalType: 'address',
      name: '',
      type: 'address'
    }],
    name: 'allowance',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }, {
    constant: false,
    inputs: [{internalType: 'address', name: 'spender', type: 'address'}, {
      internalType: 'uint256',
      name: 'value',
      type: 'uint256'
    }],
    name: 'approve',
    outputs: [{internalType: 'bool', name: '', type: 'bool'}],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  }, {
    constant: true,
    inputs: [{internalType: 'address', name: '', type: 'address'}],
    name: 'balanceOf',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }, {
    constant: false,
    inputs: [{internalType: 'address', name: 'to', type: 'address'}],
    name: 'burn',
    outputs: [{internalType: 'uint256', name: 'amount0', type: 'uint256'}, {
      internalType: 'uint256',
      name: 'amount1',
      type: 'uint256'
    }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  }, {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [{internalType: 'uint8', name: '', type: 'uint8'}],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }, {
    constant: true,
    inputs: [],
    name: 'factory',
    outputs: [{internalType: 'address', name: '', type: 'address'}],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }, {
    constant: true,
    inputs: [],
    name: 'getReserves',
    outputs: [{internalType: 'uint112', name: '_reserve0', type: 'uint112'}, {
      internalType: 'uint112',
      name: '_reserve1',
      type: 'uint112'
    }, {internalType: 'uint32', name: '_blockTimestampLast', type: 'uint32'}],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }, {
    constant: false,
    inputs: [{internalType: 'address', name: '_token0', type: 'address'}, {
      internalType: 'address',
      name: '_token1',
      type: 'address'
    }],
    name: 'initialize',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  }, {
    constant: true,
    inputs: [],
    name: 'kLast',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }, {
    constant: false,
    inputs: [{internalType: 'address', name: 'to', type: 'address'}],
    name: 'mint',
    outputs: [{internalType: 'uint256', name: 'liquidity', type: 'uint256'}],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  }, {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [{internalType: 'string', name: '', type: 'string'}],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }, {
    constant: true,
    inputs: [{internalType: 'address', name: '', type: 'address'}],
    name: 'nonces',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }, {
    constant: false,
    inputs: [{internalType: 'address', name: 'owner', type: 'address'}, {
      internalType: 'address',
      name: 'spender',
      type: 'address'
    }, {internalType: 'uint256', name: 'value', type: 'uint256'}, {
      internalType: 'uint256',
      name: 'deadline',
      type: 'uint256'
    }, {internalType: 'uint8', name: 'v', type: 'uint8'}, {
      internalType: 'bytes32',
      name: 'r',
      type: 'bytes32'
    }, {internalType: 'bytes32', name: 's', type: 'bytes32'}],
    name: 'permit',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  }, {
    constant: true,
    inputs: [],
    name: 'price0CumulativeLast',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }, {
    constant: true,
    inputs: [],
    name: 'price1CumulativeLast',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }, {
    constant: false,
    inputs: [{internalType: 'address', name: 'to', type: 'address'}],
    name: 'skim',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  }, {
    constant: false,
    inputs: [{internalType: 'uint256', name: 'amount0Out', type: 'uint256'}, {
      internalType: 'uint256',
      name: 'amount1Out',
      type: 'uint256'
    }, {internalType: 'address', name: 'to', type: 'address'}, {
      internalType: 'bytes',
      name: 'data',
      type: 'bytes'
    }],
    name: 'swap',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  }, {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [{internalType: 'string', name: '', type: 'string'}],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }, {
    constant: false,
    inputs: [],
    name: 'sync',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  }, {
    constant: true,
    inputs: [],
    name: 'token0',
    outputs: [{internalType: 'address', name: '', type: 'address'}],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }, {
    constant: true,
    inputs: [],
    name: 'token1',
    outputs: [{internalType: 'address', name: '', type: 'address'}],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }, {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }, {
    constant: false,
    inputs: [{internalType: 'address', name: 'to', type: 'address'}, {
      internalType: 'uint256',
      name: 'value',
      type: 'uint256'
    }],
    name: 'transfer',
    outputs: [{internalType: 'bool', name: '', type: 'bool'}],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  }, {
    constant: false,
    inputs: [{internalType: 'address', name: 'from', type: 'address'}, {
      internalType: 'address',
      name: 'to',
      type: 'address'
    }, {internalType: 'uint256', name: 'value', type: 'uint256'}],
    name: 'transferFrom',
    outputs: [{internalType: 'bool', name: '', type: 'bool'}],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  }];

module.exports = {
  ERC20_ABI,
  WETH_ABI,
  UNISWAP_PAIR_ABI
};
