import { ethers } from 'hardhat'

async function main() {
  const WannseeFactory = '0xCD9D4B62a0A7c900b2FF9e64B8BF2a6aB482FcCe'
  const WETH = '0x0D59E765344700Af7Cb9cb66cE6c0A11ee113afA'
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
