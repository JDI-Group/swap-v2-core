const developmentChains = ["hardhat", "localhost"]
const { ethers } = require("hardhat")

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
    },
    167004: {
        name: "taiko",
    },
    11155111: {
        name: "sepolia",
    },
}

module.exports = {
    networkConfig,
    developmentChains,
}
