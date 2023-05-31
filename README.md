--network wannsee
--network taiku
--network sepolia

hh run scripts/xxx.js --network wannsee
hh run scripts/xxxx.js
hh run scripts/index.js --network ganache

test
hh test test/unit/xxx.test.js

deploy
hh deploy --tags v2 --network ganache

hh console --network wannsee
await network.provider.send("eth_blockNumber", [])

[flow]
hh deploy --tags v2 --network ganache
hh run scripts/index.js --network ganache

[wannsee]
Factory=0x86f515845c3451742d1dB85B77Fd53f83fA1D393
Init_hash=0xff0035d584c068b44537a40ab715964dc6240105370289d8c7bc3c294e1e988c
WETH=0x5FB8d67252bA547C11edafFF83721C776108e2f9
Router=0x5E15fAD1aFf0FF891d5165E27c19e974F660F600
feeSetter=0x617cd3DB0CbF26F323D5b72975c5311343e09115

[ganache]
Factory - 0x6FA34D533Ed090ED1Bb76f4ed9FBB201D51Dc25D
Init_hash - 0x68b0ab55ef20390334a1b36dd4104c1862efe02f05ce932e9180a091500c678a
WMXC - 0xA7e60fCBD556d79Ad20745CE26cF66118EaCA7C2
Router - 0x267a72286d80770a7B715Ddb3F32560a4ab37c13
feeSetter - 0x299e234b723fa4616aFbe68A1f149D69FDd82345
