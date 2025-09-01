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
        args: ['0x72208C18A7a04B0E6A5f40898Cc460b94AA5e2a2', '0x1C5b8F35933d4C9BD0B49ca0b4F91475E1a6501b'],
        log: true,
    })
}

module.exports.tags = ["all", "02_swap_redeploy"]
