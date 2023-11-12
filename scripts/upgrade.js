const { ethers, getNamedAccounts, deployments, network } = require("hardhat")
const { networkConfig } = require("../helper-hardhat-config.js")

const parseEther = ethers.utils.parseEther
const formatEther = ethers.utils.formatEther
const getBalance = ethers.provider.getBalance

async function main() {
    XDGTokenUpgrade()
}

async function XDGTokenUpgrade() {
    const [deployer] = await ethers.getSigners()
    const XDGTokenV2Contract = await ethers.getContractFactory("XDGTokenV2")

    let instance = XDGTokenV2Contract.attach(networkConfig.XDGToken)
    let owner = await instance.owner()
    // console.log(owner)

    // // get MXCL2Bridge logic
    // const implement = await upgrades.erc1967.getImplementationAddress(
    //     contracts.MXCL2Bridge
    // )
    // console.log(implement)

    // upgrade
    await upgrades.upgradeProxy(networkConfig.XDGToken, XDGTokenV2Contract)
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
