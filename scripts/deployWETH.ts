import { ethers } from 'hardhat'

async function main() {
  const WETH = await ethers.getContractFactory('WETH9')
  const wETH = await WETH.deploy()

  await wETH.deployed()

  console.log(`Wannsee WETH deployed to ${wETH.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
