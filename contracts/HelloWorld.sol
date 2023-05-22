//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {

    string message;
    address payable owner;

    event DepositMade(address _sender, uint _amount);

    constructor() {
        message = "Welcome";
        owner = payable(msg.sender);
    }

    modifier _onlyOwner() {
        require(msg.sender == owner, "Invalid Authorization");
        _;
    }

    function greet() public view returns(string memory) {
        return message;
    }

    function balance() public view returns(uint) {
        return address(this).balance;
    }

    function recieve() public payable returns(bool) {
        emit DepositMade(msg.sender, msg.value);
        return true;
    }

    function withdraw() public payable _onlyOwner() {
        owner.transfer(address(this).balance);
    }
}