const { network, ethers, deployments } = require("hardhat")
const chainId = network.config.chainId

const getWmxc = async () => {
    const [deployer] = await ethers.getSigners()

    let { address, abi } = await deployments.get("WMXC9")
    return new ethers.Contract(address, abi, deployer)
}

const getUniswapV2Factory = async () => {
    const [deployer] = await ethers.getSigners()

    let { address, abi } = await deployments.get("UniswapV2Factory")
    return new ethers.Contract(address, abi, deployer)
}

module.exports = {
    getWmxc,
    getUniswapV2Factory,
}
