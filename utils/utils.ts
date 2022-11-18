import { Contract } from "ethers"
import { HardhatRuntimeEnvironment } from "hardhat/types"
import "hardhat-deploy"

async function getContract(
  hre: HardhatRuntimeEnvironment,
  contractName: string
): Promise<Contract> {
  const artifact = await hre.deployments.get(contractName)
  await hre.ethers.provider.waitForTransaction(artifact.receipt.transactionHash)
  const abi = new hre.ethers.utils.Interface(artifact.abi)
  return new hre.ethers.Contract(artifact.address, abi, hre.ethers.provider)
}

export {
  getContract
}