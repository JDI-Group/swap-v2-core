const { network } = require("hardhat")
const { networkConfig, developmentChains } = require("../helper-hardhat-config")

require("dotenv").config()

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    await deploy("Dogo", {
        contract: "ERC20FixedSupply",
        from: deployer,
        args: ["Dogo", "Dogo", 1000000000],
        log: true,
    })
    // await deploy("tokenB", {
    //     contract: "ERC20FixedSupply",
    //     from: deployer,
    //     args: ["tokenB", "tokenB", 1000000000],
    //     log: true,
    // })
    // await deploy("tokenC", {
    //     contract: "ERC20FixedSupply",
    //     from: deployer,
    //     args: ["tokenC", "tokenC", 1000000000],
    //     log: true,
    // })
    // await deploy("tokenD", {
    //     contract: "ERC20FixedSupply",
    //     from: deployer,
    //     args: ["tokenD", "tokenD", 1000000000],
    //     log: true,
    // })
}

module.exports.tags = ["all", "token"]
