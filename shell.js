/* 
hh run scripts/xdg.js --network localhost
*/

script
/* 
hh run scripts/setBatchTransfer.js --network wannsee_mainnet
hh run scripts/index.js --network wannsee
hh run scripts/xdg.js --network wannsee
hh run scripts/upgrade.js --network wannsee
hh run scripts/wmxc.js --network wannsee
hh run scripts/account.js --network wannsee
*/

/* 
hh run scripts/xdg.js --network wannsee_mainnet
hh run scripts/account.js --network wannsee_mainnet
*/

deploy
/* 
hh deploy --tags BatchTransfer --network wannsee_mainnet

hh deploy --tags v2_factory --network wannsee_mainnet
hh deploy --tags v2_factory --network ganache
hh deploy --tags v2_factory --network wannsee
hh deploy --tags token --network localhost
hh deploy --tags token --network wannsee
hh deploy --tags token --network wannsee_mainnet
*/

test
/* 
hh test test/xxx.test.js
hh test test/BatchTransfer.test.js
*/

verify
/* 
hh verify --network wannsee_mainnet 0x757e5af94fC9b3d4035C2e6Cb1fD304F43c0A1A4 "0x8bC7cf83f5F83781Ec85B78d866222987Ae24657" "0xcBCE60BAD702026d6385E5f449e44099A655d14f"
*/

/* 
--network wannsee
--network taiku
--network sepolia

test

hh console --network wannsee
await network.provider.send("eth_blockNumber", [])
*/
