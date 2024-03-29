const developmentChains = ["hardhat", "localhost"]
const { ethers, network } = require("hardhat")

const chainId = network.config.chainId || 31337

const networkConfig = {
    default: {
        name: "hardhat",
    },
    18686: {
        name: "wannsee mainnet",
        feeToSetter: "0x4faBD45F69D907aC3a3941c34f466A6EFf44bAcA",
        XDGToken: "0x6c1664332EFdAd3517cDfBA99c0435098428c4bA",
        DGToken: "0x77E5a8bE0bb40212458A18dEC1A9752B04Cb6EA1",

        batchTransfer: "0x8926c3D9ab237d7ef822A02Ea8505B3021ae16e2",
    },
    31337: {
        name: "localhost",
        feeToSetter: "0x45A83F015D0265800CBC0dACe1c430E724D49cAc",
        XDGToken: "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6",
        DGToken: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
    },
    5: {
        name: "goerli",
    },
    1337: {
        name: "ganache",
        feeToSetter: "0x299e234b723fa4616aFbe68A1f149D69FDd82345",
    },
    421613: {
        name: "arbiture_goerli",
    },
    5167004: {
        name: "geneva",
        live: true,
        timeout: 120000000,
        feeToSetter: "0x45A83F015D0265800CBC0dACe1c430E724D49cAc"
    },
    167004: {
        name: "taiko",
    },
    11155111: {
        name: "sepolia",
    },
}

module.exports = {
    networkConfig: networkConfig[chainId],
    developmentChains,
}
