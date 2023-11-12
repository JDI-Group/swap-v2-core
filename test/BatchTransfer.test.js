const { assert, expect } = require("chai")
const { network, ethers } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config")
const { parse } = require("dotenv")

const parseEther = ethers.utils.parseEther
const formatEther = ethers.utils.formatEther
const getBalance = ethers.provider.getBalance

if (!developmentChains.includes(network.name)) {
  describe.skip
} else {
  describe("BatchTransfer Unit Tests", function () {
    let owner, user1, user2, user3, user4, batchTransfer, nftToken
    beforeEach(async () => {
      ;[owner, user1, user2, user3, user4] = await ethers.getSigners()
      const batchTransferContract =
        await ethers.getContractFactory("BatchTransfer")
      const tokenContract = await ethers.getContractFactory("ERC20FixedSupply")

      batchTransfer = await batchTransferContract.deploy()
      nftToken = await tokenContract.deploy("doge", "doge", 1000000)
    })

    describe("setOwner", function () {
      it("only admin set", async () => {
        await expect(
          batchTransfer.connect(user1).setOwner(user1.address, true),
        ).to.be.revertedWith("Not admin")
      })
      it("set owner right", async () => {
        await batchTransfer.setOwner(user1.address, true)
        let isOwner = await batchTransfer.owners(user1.address)
        expect(isOwner).to.equal(true)

        await batchTransfer.setOwner(user1.address, false)
        isOwner = await batchTransfer.owners(user1.address)
        expect(isOwner).to.equal(false)
      })
    })

    describe("withdrawToken", function () {
      it("only admin withdraw", async () => {
        await nftToken.transfer(batchTransfer.address, parseEther("100"))
        await expect(
          batchTransfer
            .connect(user1)
            .withdrawToken(nftToken.address, owner.address, parseEther("100")),
        ).to.be.revertedWith("Not admin")
      })
      it("Not enough tokens in contract", async () => {
        await nftToken.transfer(batchTransfer.address, parseEther("100"))
        await expect(
          batchTransfer.withdrawToken(
            nftToken.address,
            owner.address,
            parseEther("101"),
          ),
        ).to.be.revertedWith("Not enough tokens in contract")
      })
      it("Not enough tokens in contract", async () => {
        await nftToken.transfer(batchTransfer.address, parseEther("100"))
        await batchTransfer.withdrawToken(
          nftToken.address,
          user2.address,
          parseEther("50"),
        )

        let balance1 = await nftToken.balanceOf(batchTransfer.address)
        let balance2 = await nftToken.balanceOf(user2.address)

        expect(balance1).to.equal(parseEther("50"))
        expect(balance2).to.equal(parseEther("50"))
      })
    })

    describe("batchTransfer", function () {
      beforeEach(async () => {
        await batchTransfer.setOwner(user1.address, true)
      })

      it("only owner excute", async () => {
        await expect(
          batchTransfer
            .connect(user2)
            .batchTransfer(
              nftToken.address,
              [user3.address, user4.address],
              [1000, 1000],
            ),
        ).to.be.revertedWith("Not owner")
      })
      it("data mismatch", async () => {
        await expect(
          batchTransfer.batchTransfer(
            nftToken.address,
            [user3.address],
            [1000, 1000],
          ),
        ).to.be.revertedWith("Recipients and amounts length mismatch")
      })
      it("Overflow", async () => {
        await batchTransfer.setBatchNumsMax(2)
        await expect(
          batchTransfer.batchTransfer(
            nftToken.address,
            [user2.address, user2.address, user2.address],
            [1000, 1000, 1000],
          ),
        ).to.be.revertedWith("Overflow nums at a time")
      })
      it("Not enough tokens in contract", async () => {
        await expect(
          batchTransfer.batchTransfer(
            nftToken.address,
            [user2.address, user2.address, user2.address],
            [1000, 1000, 1000],
          ),
        ).to.be.revertedWith("Not enough tokens in contract")
      })
      it("transfer success", async () => {
        await nftToken.transfer(batchTransfer.address, parseEther("1000"))
        await batchTransfer.batchTransfer(
          nftToken.address,
          [user2.address, user3.address, user4.address],
          [parseEther("50"), parseEther("20"), parseEther("30")],
        )

        let balance1 = await nftToken.balanceOf(user2.address)
        let balance2 = await nftToken.balanceOf(user3.address)
        let balance3 = await nftToken.balanceOf(user4.address)

        expect(balance1).to.equal(parseEther("50"))
        expect(balance2).to.equal(parseEther("20"))
        expect(balance3).to.equal(parseEther("30"))
      })
    })
  })
}
