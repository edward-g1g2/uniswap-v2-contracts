import 'hardhat-deploy'
import { DeployFunction } from 'hardhat-deploy/dist/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { getContract } from '../utils/utils'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts()
  const factory = await getContract(hre, 'UniswapV2Factory')
  const weth9 = await getContract(hre, "WETH9")

  const tx = await hre.deployments.deploy('UniswapV2Router02', {
    from: deployer,
    args: [factory.address, weth9.address],
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