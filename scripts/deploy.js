const hre = require("hardhat");

async function main() {
  const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  const nftMarketplace = await NFTMarketplace.deploy();
  await nftMarketplace.deployed();

  const Transfer = await hre.ethers.getContractFactory("Transfer");
  const transfer = await Transfer.deploy();
  await transfer.deployed();

  console.log(
    `Deployed contract Address ${nftMarketplace.address}`
  );
  console.log(
    `Deployed contract Address ${transfer.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
