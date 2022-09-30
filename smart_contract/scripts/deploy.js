// const hre = require("hardhat");


// The function deploys transactions to the blockchain
const main = async () => {

  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();

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





{/*
const main = async () => {
  const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
  const transactionsContract = await transactionsFactory.deploy();

  await transactionsContract.deployed();

  console.log("Transactions address: ", transactionsContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
 */}




