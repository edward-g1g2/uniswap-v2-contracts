import "hardhat-deploy"
import { DeployFunction } from "hardhat-deploy/dist/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts()
  const tx = await hre.deployments.deploy('Multicall', {
    from: deployer,
    log: true,
    waitConfirmations: 1,
    proxy: {
      proxyContract: 'OpenZeppelinTransparentProxy'
    }
  })
  if (tx.transactionHash) {
    await hre.ethers.provider.waitForTransaction(tx.transactionHash)
  }
}

func.tags = ['swap']
export default func