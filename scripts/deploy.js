// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const {utils} = require('ethers');


async function main() {
  const [owner] = await hre.ethers.getSigners();
  const contractFactory = await ethers.getContractFactory('DataConsumerV3');
  const contract = await contractFactory.deploy();
  await contract.deployed();
  console.log('Contract deployed to address:', contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//0xB26880D81E70496917aF6A1Daf4e413689CAb1b3