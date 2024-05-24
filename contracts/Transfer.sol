// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Transfer {
    uint256 transactionCount;
    event TransferEvent(
        address from,
        address receiver,
        uint256 amount,
        string message,
        uint256 timestamp
    );

    struct TransferStruck {
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
    }

    TransferStruck[] transactions;

    function addDataToBlockchain(
        address payable receiver,
        uint256 amount,
        string memory message
    ) public {
        transactionCount += 1;
        transactions.push(TransferStruck(msg.sender, receiver, amount, message, block.timestamp));
        emit TransferEvent(
            msg.sender,
            receiver,
            amount,
            message,
            block.timestamp
        );
    }

    function getAllTransactions() public view returns (TransferStruck[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }

}