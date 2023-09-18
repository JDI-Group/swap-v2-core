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
    5167003: {
        name: "wannsee",
        live: true,
        timeout: 120000000,
        feeToSetter: "0x45A83F015D0265800CBC0dACe1c430E724D49cAc",
        XDGToken: "0x28bcb9E425be00218D989AbCA55771C851C98feC",
        DGToken: "0xdCc959e6e731b1CcA695a9e28D39103Bd0ecdb05",
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
