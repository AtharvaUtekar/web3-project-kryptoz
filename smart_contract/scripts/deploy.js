// const hre = require("hardhat");

// The function deploys transactions to the blockchain
const main = async () => {

  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await Transactions.deployed();
  // We retrieve the transaction address
  console.log("Transactions deployed to:", transactions.address);
}

const runMain = async () => {
   try {
      await main();
      process.exit(0);
    
   } catch (error) {
      console.error(error);
      process.exitCode = 1;
    
   }
}

runMain();