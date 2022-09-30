// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCount;

    // Declaring the transfering event
    event Transfer(
        address from,
        address reciever,
        uint amount,
        string message,
        uint256 timestamp,
        string keyword
    );

    // Initializing the structure for Transfer array
    struct TransferStruct{
        address sender;
        address reciever;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    // Transfer array declaration
    TransferStruct[] transactions;

    // Parameters to be added to blockchain transactions
    function addToBlockChain(address payable reciever, uint amount, string memory message, string memory keyword) public {
        // Increment the transaction count
        transactionCount += 1;
        // push it in array
        transactions.push(TransferStruct(msg.sender, reciever, amount, message, block.timestamp, keyword));
        // Calling the transfer function
        emit Transfer(msg.sender, reciever, amount, message, block.timestamp, keyword);
    }
    function getAllTransactions() public view returns(TransferStruct[] memory){
        return transactions;
    }
    function getTransactionsCount() public view returns(uint256){
        return transactionCount;
    }

}