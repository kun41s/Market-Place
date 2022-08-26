const hre = require("hardhat");

async function main() {
  const MarketPlace = await hre.ethers.getContractFactory("MarketPlace");
  const marketPlace = await MarketPlace.deploy();
  await marketPlace.deployed();

  console.log("MarketPlace was deployed to", marketPlace.address);
}

main().then(() =>
  process.exit(0).catch((err) => {
    console.log(err);
    process.exit(1);
  })
);
