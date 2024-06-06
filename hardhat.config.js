require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/1lLlXVgyFjeI4bG7pkT4bidhsSKq8R0i",
      accounts: [
        `0x${"66c7c544f05027ea2dd198bce40be520f3036858d7fba2796ff2cdc6bc65ee6c"}`
      ]
    },
    // localhost: {
    //   url: 'http://127.0.0.1:8545',
    //   chainId: 31337,
    // },
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
  mocha: {
    timeout: 20000,
  },
};
