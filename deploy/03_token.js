const { network, upgrades } = require("hardhat")
const { networkConfig, developmentChains } = require("../helper-hardhat-config")

require("dotenv").config()

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    // await deploy("Dogo", {
    //     contract: "ERC20FixedSupply",
    //     from: deployer,
    //     args: ["Dogo", "Dogo", 1000000000],
    //     log: true,
    // })
    // await deploy("Uni", {
    //     contract: "ERC20FixedSupply",
    //     from: deployer,
    //     args: ["Uni", "Uni", 1000000000],
    //     log: true,
    // })
    // await deploy("bitcoin", {
    //     contract: "ERC20FixedSupply",
    //     from: deployer,
    //     args: ["Bitcoin", "BTC", 1000000000],
    //     log: true,
    // })

    const UpgradeTokenContract = await ethers.getContractFactory("XDGToken")
    const XDGToken = await upgrades.deployProxy(
        UpgradeTokenContract,
        [deployer, 100000000000000],
        {
            initializer: "initialize",
            kind: "uups",
        }
    )
    console.log("XDGToken address:", XDGToken.address)
}

module.exports.tags = ["all", "token"]
