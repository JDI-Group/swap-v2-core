import { ethers } from 'hardhat'

async function main() {
  const WannseeFactory = '0x40392ea6cd095c5505B1EEAcd6Bf8066E19E77F0'
  const WETH = '0xEEE5eD1d12B62eAe4513e28d66E4EA300005891A'
  const Router01 = await ethers.getContractFactory('WannseeRouter01')
  const router01 = await Router01.deploy(WannseeFactory, WETH)

  await router01.deployed()

  //   0x7D8650638c9e718b58a16eac2A50dF7cfc4Af2A2 Router01 Address

  console.log(`Wannsee Router01 deployed to ${router01.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
