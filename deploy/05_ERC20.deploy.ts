import 'hardhat-deploy'
import { DeployFunction } from 'hardhat-deploy/dist/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts()
  let tx = await hre.deployments.deploy('MyERC20', {
    from: deployer,
    args: ['G1G2 USD Tether', 'ggUSDT'],
    log: true,
    waitConfirmations: 1
  })
  if (tx.transactionHash) {
    await hre.ethers.provider.waitForTransaction(tx.transactionHash)
  }

  tx = await hre.deployments.deploy('MyERC20', {
    from: deployer,
    args: ['G1G2 USD Coin', 'ggUSDC'],
    log: true,
    waitConfirmations: 1
  })
  if (tx.transactionHash) {
    await hre.ethers.provider.waitForTransaction(tx.transactionHash)
  }
}

func.tags = ['erc20']
export default func