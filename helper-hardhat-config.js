const developmentChains = ["hardhat", "localhost"]
const { ethers } = require("hardhat")

const networkConfig = {
    default: {
        name: "hardhat",
    },
    31337: {
        name: "localhost",
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
        live: false,
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
