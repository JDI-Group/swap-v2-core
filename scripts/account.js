const { ethers, getNamedAccounts, deployments, network } = require("hardhat")
const { networkConfig } = require("../helper-hardhat-config.js")
const { tokens } = require("../config/address.js")

const parseEther = ethers.utils.parseEther
const formatEther = ethers.utils.formatEther
const getBalance = ethers.provider.getBalance

const XDG_SENDER_ADDRESS = process.env.XDG_SENDER_ADDRESS
const PRICE_ADDRESS = process.env.PRICE_ADDRESS
const FAST_PRICE_ADDRESS = process.env.FAST_PRICE_ADDRESS
const AAVE_PRICE_ADDRESS = process.env.AAVE_PRICE_ADDRESS

async function main() {
    const [deployer] = await ethers.getSigners()

    // =======balance========
    let NativeBalance = await getBalance(XDG_SENDER_ADDRESS)
    console.log(formatEther(NativeBalance), "XDG_SENDER_ADDRESS")
    // NativeBalance = await getBalance(PRICE_ADDRESS)
    // console.log(formatEther(NativeBalance), "PRICE_ADDRESS")
    // NativeBalance = await getBalance(FAST_PRICE_ADDRESS)
    // console.log(formatEther(NativeBalance), "FAST_PRICE_ADDRESS")
    NativeBalance = await getBalance(AAVE_PRICE_ADDRESS)
    console.log(formatEther(NativeBalance), "AAVE_PRICE_ADDRESS")

    // =======token balance========
    // const XDGTokenContract = await ethers.getContractFactory("XDGTokenV2")
    // const XDGToken = XDGTokenContract.attach(tokens.XDGToken)
    // let balanceXDGSender = await XDGToken.balanceOf(XDG_SENDER_ADDRESS)
    // console.log(formatEther(balanceXDGSender), "balanceXDGSender")

    // =======transfer========
    // await deployer.sendTransaction({
    //     to: AAVE_PRICE_ADDRESS,
    //     value: parseEther("500000"),
    // })
    // await DigiToken.transfer(liqer, parseEther("1000000"))
    // await XSDToken.transfer(liqer, parseEther("1000000"))
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
