const { network, upgrades } = require("hardhat")
const { networkConfig, developmentChains } = require("../helper-hardhat-config")

require("dotenv").config()

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    // await deploy("Digi", {
    //     contract: "ERC20FixedSupply",
    //     from: deployer,
    //     args: ["Digi", "DG", 1000000000],
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

    // const UpgradeTokenContract = await ethers.getContractFactory("XDGTokenV2")
    // const XDGToken = await upgrades.deployProxy(
    //     UpgradeTokenContract,
    //     [deployer, 100000000],
    //     {
    //         initializer: "initialize",
    //         kind: "uups",
    //     }
    // )
    // 0x3453c56D41A18147dcb4a92b0B08210F90740a87 geneva testnet
    // console.log("XDGToken address:", XDGToken.address)
}

module.exports.tags = ["all", "token"]
