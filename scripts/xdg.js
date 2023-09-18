const { ethers, getNamedAccounts, deployments, network } = require("hardhat")
const { networkConfig } = require("../helper-hardhat-config.js")
const {
    getDeployment,
    contractAttach,
    tokens,
    getERC20Contract,
} = require("../config/address")

const parseEther = ethers.utils.parseEther
const formatEther = ethers.utils.formatEther
const getBalance = ethers.provider.getBalance

const chainId = network.config.chainId

async function main() {
    let pairAddress = await getPairAddress()
    // const [deployer] = await ethers.getSigners()

    const XDGTokenContract = await ethers.getContractFactory("XDGToken")
    const XDGToken = XDGTokenContract.attach(networkConfig.XDGToken)
    // let owner = await XDGToken.owner()

    // console.log(networkConfig.DGToken, "networkConfig.DGToken")
    // console.log(networkConfig.XDGToken, "networkConfig.XDGToken")
    // console.log(owner, "owner")

    // setPair
    // await XDGToken.setXdgPair(pairAddress)

    // let xdgPair = await XDGToken.xdgPair()
    // console.log(xdgPair)

    await XDGToken.mint(
        // "0xe4f8dd6d10aa852a14a30890836704d66e3177cd",
        // "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
        "0xa8eF099f636AFe4210de699f546A37326820aaF7",
        parseEther("100000000000000")
    )
    // console.log(owner)

    // let amount = await XDGToken.balanceOf(
    //     "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
    // )
    // await XDGToken.transfer(
    //     "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
    //     amount
    // )
}

const getPairAddress = async () => {
    const swapFactory = await getDeployment("UniswapV2Factory")
    const pairAddress = await swapFactory.getPair(
        networkConfig.DGToken,
        networkConfig.XDGToken
    )
    return pairAddress
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
