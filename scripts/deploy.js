const {ethers} = require("hardhat");

async function main() {
  const aiMintsContractAddress = "0x744656fbCa6EfEBC042dD080a7AC3660c0fDCEBb";
  const deDevContract = await ethers.getContractFactory("DeDevToken");
  const deployedDeDevContract = await deDevContract.deploy(aiMintsContractAddress);

  await deployedDeDevContract.deployed();

  console.log(
    `Token Contract Deployed to -> ${deployedDeDevContract.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



// Token Contract Address -> 0x809350f42B5E4319c07E2C6AAE44c594AfE40C5B