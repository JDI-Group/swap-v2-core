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
const config = networkConfig[chainId]

async function main() {
    // const [deployer] = await ethers.getSigners()

    let UniswapV2Factory = await getDeployment("UniswapV2Factory")

    let initCode = await UniswapV2Factory["INIT_CODE_PAIR_HASH"]()
    console.log(initCode)

    // let pairAddress = await UniswapV2Factory.callStatic.getPair(
    //     tokens.WMXCToken,
    //     tokens.RIDEToken
    // )

    // const pair = await contractAttach("UniswapV2Pair", pairAddress)
    // let { _reserve0, _reserve1 } = await pair.getReserves()

    // const token0 = await pair.token0()
    // const token1 = await pair.token1()

    // let pairToken0 = await getERC20Contract(token0)
    // let pairToken1 = await getERC20Contract(token1)
    // let decimals0 = await pairToken0.decimals()
    // let decimals1 = await pairToken1.decimals()

    // if (token0 == tokens.WMXCToken) {
    //     // console.log(_reserve0, _reserve1);
    //     console.log(_reserve1.div(_reserve0))
    //     // return (uint256(reserve0) * (10 ** decimals1)) / reserve1;
    // } else {
    //     let price = _reserve0.mul(10 ** 6).div(_reserve1)
    //     console.log(price.toString())
    //     // return (uint256(reserve1) * (10 ** decimals0)) / reserve0;
    // }

    // console.log(pairAddress)
    // IUniswapV2Pair pair = IUniswapV2Pair(pairAddress);
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
