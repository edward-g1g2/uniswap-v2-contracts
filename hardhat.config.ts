import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config"

// hardhat plugins
import "hardhat-deploy"

const accounts = [process.env.CONTRACT_DEPLOYER_PRIVATE_KEY || ""]

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.17", settings: {
          optimizer: { enabled: true, runs: 10_000 },
        }
      },
      {
        version: "0.5.16", settings: {
          optimizer: { enabled: true, runs: 10_000 },
        }
      },
      {
        version: "0.4.18", settings: {
          optimizer: { enabled: true, runs: 10_000 },
        }
      },
      {
        version: "0.6.6", settings: {
          optimizer: { enabled: true, runs: 10_000 },
        }
      },
      {
        version: "0.5.0", settings: {
          optimizer: { enabled: true, runs: 10_000 },
        }
      }
    ]
  },
  namedAccounts: {
    deployer: 0
  },
  networks: {
    hardhat: {
      // allowUnlimitedContractSize: true
    },
    goerli: {
      chainId: 5,
      url: process.env.GOERLI_URL,
      accounts
    },
    // l1test: {
    //   chainId: 23023,
    //   url: 'http://127.0.0.1:10545',
    //   accounts,
    // },
    l2test: {
      chainId: 1000001,
      url: 'http://127.0.0.1:11545',
      accounts,
    }
  }
};

export default config;
