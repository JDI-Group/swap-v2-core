const { network } = require("hardhat")
const { networkConfig, developmentChains } = require("../helper-hardhat-config")

require("dotenv").config()

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    const feeToSetter = networkConfig[chainId]["feeToSetter"]

    const UniswapV2Factory = await deploy("UniswapV2Factory", {
        from: deployer,
        args: [feeToSetter],
        log: true,
    })

    const Wmxc = await deploy("WMXC9", {
        from: deployer,
        args: [],
        log: true,
    })

    await deploy("UniswapV2Router02", {
        from: deployer,
        args: [UniswapV2Factory.address, Wmxc.address],
        log: true,
    })
}

module.exports.tags = ["all", "v2"]
