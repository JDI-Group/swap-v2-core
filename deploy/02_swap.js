const { network } = require("hardhat")
const { networkConfig, developmentChains } = require("../helper-hardhat-config")

require("dotenv").config()

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()
    // const chainId = network.config.chainId

    let factory = await deployments.get("UniswapV2Factory")

    const WMCH = await deploy("WMCH9", {
        from: deployer,
        args: [],
        log: true,
    })

    await deploy("Multicall", {
        from: deployer,
        args: [],
        log: true,
    })

    await deploy("UniswapV2Router02", {
        from: deployer,
        args: [factory.address, WMCH.address],
        log: true,
    })

}

module.exports.tags = ["all", "v2_swap"]
