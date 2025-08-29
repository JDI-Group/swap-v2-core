const { network } = require("hardhat")
const { networkConfig, developmentChains } = require("../helper-hardhat-config")

require("dotenv").config()

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()
    // const chainId = network.config.chainId

    let factory = await deployments.get("UniswapV2Factory")


    await deploy("UniswapV2Router02", {
        from: deployer,
        args: ['0xC00fD690db86Ed98823381e4739Ef6Dd764B825c', '0x12F3b69C248609BAc6ABD24067bec75F540a098d'],
        log: true,
    })
}

module.exports.tags = ["all", "02_swap_redeploy"]
