const hre = require("hardhat");
require("dotenv").config({ path: ".env" });
const { CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  const cryptoDevTokenAddress = CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS;
  /*
  DeployedContract in ethers.js is an abstraction used to deploy new smart contracts,
  so exchangeContract here is a factory for instances of our Exchange contract.
  */
  // here we deploy the contract
 const exchangeContract = await hre.ethers.deployContract("Exchange", [
   cryptoDevTokenAddress,
 ]);

  await exchangeContract.waitForDeployment();

 // print the address of the deployed contract
 console.log("Exchange Contract Address:", exchangeContract.target);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
