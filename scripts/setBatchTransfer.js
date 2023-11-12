const { ethers, getNamedAccounts, deployments, network } = require("hardhat")
const { networkConfig } = require("../helper-hardhat-config.js")
const { contractAttach } = require("../utils/utils.js")

const parseEther = ethers.utils.parseEther
const formatEther = ethers.utils.formatEther
const getBalance = ethers.provider.getBalance

const chainId = network.config.chainId

const XDG_SENDER_ADDRESS = process.env.XDG_SENDER_ADDRESS

async function main() {
    const [deployer] = await ethers.getSigners()

    // const BatchTransfer = await contractAttach(
    //   "BatchTransfer",
    //   networkConfig.batchTransfer,
    // )

    // let XDGTokenWithWallect = contracts.XDGTokenWithWallect
    // let balance = await XDGTokenWithWallect.balanceOf(XDG_SENDER_ADDRESS)
    // await XDGTokenWithWallect.transfer(networkConfig.batchTransfer, balance)

    const BatchTransfer = await contractAttach(
        "BatchTransfer",
        networkConfig.batchTransfer
    )
    // console.log(XDG_SENDER_ADDRESS, "XDG_SENDER_ADDRESS")
    // await BatchTransfer.setOwner(XDG_SENDER_ADDRESS, true)

    let isOwner = await BatchTransfer.owners(XDG_SENDER_ADDRESS)
    console.log(isOwner)
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
