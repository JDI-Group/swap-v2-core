import { ethers } from 'hardhat'

async function main() {
  const feeSetter = '0x617cd3DB0CbF26F323D5b72975c5311343e09115'
  const Factory = await ethers.getContractFactory('WannseeFactory')
  const factory = await Factory.deploy(feeSetter)

  await factory.deployed()

  console.log(`Wannsee factory deployed to ${factory.address}`)
  const init_hash = await factory.INIT_CODE_PAIR_HASH()
  console.log(`Init Hash:`, init_hash)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
