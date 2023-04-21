/* eslint-disable node/no-missing-import */
import { Wallet, Contract, providers } from 'ethers'
import { artifacts } from 'hardhat'
import { deployContract } from 'ethereum-waffle'
import { expandTo18Decimals, overrides } from './utilities'

interface CoreFixture {
  token0: Contract
  token1: Contract
  WETH: Contract
  WETHPartner: Contract
  factory: Contract
  router: Contract
  routerEventEmitter: Contract
  pair: Contract
  WETHPair: Contract
}

export async function coreFixture([wallet]: Wallet[], provider: providers.Web3Provider): Promise<CoreFixture> {
  const WannseeFactory = await artifacts.readArtifact('WannseeFactory')
  const WannseeRouter01 = await artifacts.readArtifact('WannseeRouter01')
  const WannseeRouter = await artifacts.readArtifact('WannseeRouter')
  const WannseePair = await artifacts.readArtifact('WannseePair')
  const RouterEventEmitter = await artifacts.readArtifact('RouterEventEmitter')
  const ERC20 = await artifacts.readArtifact('ERC20')
  const WETH9 = await artifacts.readArtifact('WETH9')
  // deploy tokens
  const tokenA = await deployContract(wallet, ERC20, [expandTo18Decimals(10000)])
  const tokenB = await deployContract(wallet, ERC20, [expandTo18Decimals(10000)])
  const WETH = await deployContract(wallet, WETH9)
  const WETHPartner = await deployContract(wallet, ERC20, [expandTo18Decimals(10000)])

  // deploy factory
  const factory = await deployContract(wallet, WannseeFactory, [wallet.address])

  // deploy routers
  const router = await deployContract(wallet, WannseeRouter, [factory.address, WETH.address, wallet.address], overrides)

  // event emitter for testing
  const routerEventEmitter = await deployContract(wallet, RouterEventEmitter, [])

  // initialize factory
  await factory.createPair(tokenA.address, tokenB.address)
  const pairAddress = await factory.getPair(tokenA.address, tokenB.address)
  const pair = new Contract(pairAddress, JSON.stringify(WannseePair.abi), provider).connect(wallet)

  const token0Address = await pair.token0()
  const token0 = tokenA.address === token0Address ? tokenA : tokenB
  const token1 = tokenA.address === token0Address ? tokenB : tokenA

  await factory.createPair(WETH.address, WETHPartner.address)
  const WETHPairAddress = await factory.getPair(WETH.address, WETHPartner.address)
  const WETHPair = new Contract(WETHPairAddress, JSON.stringify(WannseePair.abi), provider).connect(wallet)

  return {
    token0,
    token1,
    WETH,
    WETHPartner,
    factory,
    router,
    routerEventEmitter,
    pair,
    WETHPair,
  }
}
