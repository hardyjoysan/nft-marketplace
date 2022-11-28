require("@nomicfoundation/hardhat-toolbox");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.NODE_ALCHEMY_API_KEY}`,
      accounts: [privateKey],
    },
    mainnet: {
      url: "",
      accounts: [privateKey],
    },
  },
};
