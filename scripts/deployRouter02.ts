import { ethers } from 'hardhat'

async function main() {
  const WannseeFactory = '0xCD9D4B62a0A7c900b2FF9e64B8BF2a6aB482FcCe'
  const WETH = '0x0D59E765344700Af7Cb9cb66cE6c0A11ee113afA'
  const Router02 = await ethers.getContractFactory('WannseeRouter02')
  const router02 = await Router02.deploy(WannseeFactory, WETH)

  await router02.deployed()

  console.log(`Wannsee Router02 deployed to ${router02.address}`)

  //   0x4d0A6001F9CFcC6000e323967cA1Bb2fb8Fe877D Router02 address
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
