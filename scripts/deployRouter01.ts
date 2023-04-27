import { ethers } from 'hardhat'

async function main() {
  const WannseeFactory = '0x7DDA7CAda64c9848fa9085E0ce29E68d4D2725aC'
  const WETH = '0x6b43c6c3a09B7bF071d6Fd0f72569d8209155dAB'
  const Router01 = await ethers.getContractFactory('WannseeRouter01')
  const router01 = await Router01.deploy(WannseeFactory, WETH)

  await router01.deployed()

  console.log(`Wannsee Router01 deployed to ${router01.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
