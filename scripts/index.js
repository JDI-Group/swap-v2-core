const { ethers, getNamedAccounts, deployments, network } = require("hardhat")
const { networkConfig } = require("../helper-hardhat-config.js")
const { getUniswapV2Factory } = require("../config/address")

const parseEther = ethers.utils.parseEther
const formatEther = ethers.utils.formatEther
const getBalance = ethers.provider.getBalance

const chainId = network.config.chainId
const config = networkConfig[chainId]

const contractFactory = async (contractName, address) => {
    const contract = await ethers.getContractFactory(contractName)
    return await contract.attach(address)
}

async function main() {
    const [deployer] = await ethers.getSigners()

    let UniswapV2Factory = await getUniswapV2Factory()
    let initCode = await UniswapV2Factory["INIT_CODE_PAIR_HASH"]()
    console.log(initCode)
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
