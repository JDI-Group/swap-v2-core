import { ethers } from 'hardhat'

async function main() {
  // Deploying Initgen
  console.log('***********Deploying Init Gen*************')
  const InitCode = await ethers.getContractFactory('CallHash')
  const initcode = await InitCode.deploy()
  await initcode.deployed()
  console.log(`Init code has been deployed to ${initcode.address}`)

  const genInitCodeHash = await initcode.getInitHash()

  console.log('Generated Init code: ', genInitCodeHash)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
