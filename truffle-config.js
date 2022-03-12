var HDWalletProvider = require("truffle-hdwallet-provider");
//var mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";
var mnemonic = "seed eagle place nasty miracle juice spatial drift peasant dish swamp omit";
module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:7545/", 0, 10);
      },
      network_id: '*',
      gas: 4712388,
      gasPrice: 100000000000
    }
  },
  compilers: {
    solc: {
      version: "^0.4.25"
    }
  }
};