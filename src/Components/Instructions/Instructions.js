import React from "react";
import "./Instructions.css";

const Instructions = () => {
  return (
    <div className="instructions-wrapper">
      <p>Instructions on how to use the website:</p>
      <ol type="1">
        <li>
          This is a decentralized application through which users can perform
          and get familiarized with basic functions of the ethereum blockchain
          network. Have fun&#128515;.
        </li>
        <li>
          Ensure that you have a web3 compatible web browser. Install a
          compatible wallet like{" "}
          <a href="https://metamask.io/" target="_blank" rel="noreferrer">
            Metamask
          </a>{" "}
          to make your browser web3 compatible.
        </li>
        <li>
          Acquire SepoliaEth for gas and transactions from{" "}
          <a href="https://sepoliafaucet.com/" target="_blank" rel="noreferrer">
            sepolia faucet
          </a>{" "}
          for free.
        </li>
        <li>
          If you are accessing the dapp using moblie devices, follow these{" "}
          <a
            href="https://support.metamask.io/hc/en-us/articles/6356387482523-How-to-use-the-MetaMask-Mobile-Browser"
            target="_blank"
            rel="noreferrer"
          >
            instructions.
          </a>
        </li>
        <li>
          Our dapp runs on sepolia test network. Switch to sepolia test network
          in Metamask. If you can't find sepolia test network in metamask, click
          on show/hide test network.
        </li>
        <li>
          Connect your wallet to the dapp using the Connect button. This enables
          your wallet to interact with the smart contract.
        </li>
        <li>
          Enter the amount you wish to send to the smart contract in the input.
          (Remember that the sepolia faucet only gives 0.5 sepoliaEth a day to a
          user, so your amount should be less than 0.5 sepoliaEth and should
          have minimum balance after the input amount for transaction fee -
          gas).
        </li>
        <li>The input amount can be as low as possible. Eg: 0.00025.</li>
        <li>
          You can fetch the balance of the smart contract by clicking on the
          balance button.
        </li>
        <li>
          While clicking the withdraw button, normal users will be prompted an
          error from the metamask wallet. This is because the contract balance
          can only be withdrawn by the owner of the dapp. However, if you are
          enthusiastic on what happens, go ahead and proceed with the
          transaction on metamask.
        </li>
      </ol>
    </div>
  );
};

export default Instructions;
