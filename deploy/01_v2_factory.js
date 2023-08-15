const { network } = require("hardhat")
const { networkConfig, developmentChains } = require("../helper-hardhat-config")

require("dotenv").config()

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    const feeToSetter = networkConfig[chainId]["feeToSetter"]
    console.log(`feeToSetter: ${feeToSetter}`)

    await deploy("UniswapV2Factory", {
        from: deployer,
        args: [feeToSetter],
        log: true,
    })
}

module.exports.tags = ["all", "v2_factory"]
