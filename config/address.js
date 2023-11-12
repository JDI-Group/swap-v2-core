const { network, ethers, deployments } = require("hardhat")
const chainId = network.config.chainId

const tokens = {
    5167003: {
        DHXToken: "0x8bC7cf83f5F83781Ec85B78d866222987Ae24657",
        RIDEToken: "0x499A9b11b3A107e7ac45217C3401b3D0bF36A24C",
        WMXCToken: "0x6807F4B0D75c59Ef89f0dbEF9841Fb23fFDF105D",
        XDGToken: "0x28bcb9E425be00218D989AbCA55771C851C98feC",
    },
    18686: {
        WMXCToken: "0xcBCE60BAD702026d6385E5f449e44099A655d14f",
        XDGToken: "0x6c1664332EFdAd3517cDfBA99c0435098428c4bA",
    },
}

const abis = {
    erc20: ["function decimals() external view returns (uint8)"],
}

const getERC20Contract = async (address) => {
    // 根据当前网络名称获取网络配置
    const networkConfig = hre.config.networks[network.name]
    // 获取网络提供者的URL
    const providerUrl = networkConfig.url
    const provider = new ethers.providers.JsonRpcProvider(providerUrl)
    return new ethers.Contract(address, abis.erc20, provider)
}

const getDeployment = async (contract) => {
    const [deployer] = await ethers.getSigners()
    let { address, abi } = await deployments.get(contract)
    return new ethers.Contract(address, abi, deployer)
}

const contractAttach = async (contractName, address) => {
    const contract = await ethers.getContractFactory(contractName)
    return await contract.attach(address)
}

module.exports = {
    getERC20Contract,
    getDeployment,
    contractAttach,
    tokens: tokens[chainId],
}
