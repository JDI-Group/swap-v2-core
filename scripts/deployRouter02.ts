import { ethers } from 'hardhat'

async function main() {
  const WannseeFactory = '0x40392ea6cd095c5505B1EEAcd6Bf8066E19E77F0'
  const WETH = '0xEEE5eD1d12B62eAe4513e28d66E4EA300005891A'
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
