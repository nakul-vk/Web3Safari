import "./App.css";
import { useEffect, useState } from "react";
import Web3 from "web3";
import { HelloWorld } from "./abi/abi";
import ConnectButton from "./Components/ConnectButton/ConnectButton";
import Payment from "./Components/Payment/Payment";
import Balance from "./Components/Balance/Balance";
import Result from "./Components/Result/Result";
import Withdraw from "./Components/Withdraw/Withdraw";
import Instructions from "./Components/Instructions/Instructions";
import Footer from "./Components/Footer/Footer";

function App() {
  const web3 = new Web3(Web3.givenProvider);
  const CONTRACT_ADDRESS = "0xE092cEcbC3a456192D5A3573c334823Eb46CE6F3";
  const CONTRACT_ABI = HelloWorld;
  const helloWorldContract = new web3.eth.Contract(
    CONTRACT_ABI,
    CONTRACT_ADDRESS
  );
  const [result, setResult] = useState("");
  const [currentAccount, setCurrentAccount] = useState(null);
  const [value, setValue] = useState(0);
  const [isLoading, setisLoading] = useState(false);

  const connectAccount = async () => {
    try {
      const account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      greet();
      setCurrentAccount(account);
    } catch (error) {
      setResult(error.message);
    }
  };

  const accountsChangedHandler = async () => {
    try {
      const res = await window.ethereum.request({ method: "eth_accounts" });
      setCurrentAccount(res);
    } catch (error) {
      setResult(error.message);
    }
  };

  const greet = async () => {
    try {
      const res = await helloWorldContract.methods.greet().call();
      setResult(res);
    } catch (error) {
      setResult(error.message);
    }
  };

  const pay = async () => {
    try {
      setisLoading(true);
      const { events } = await helloWorldContract.methods.recieve().send({
        from: currentAccount[0],
        value: web3.utils.toWei(value),
      });
      const sender = events["DepositMade"]["returnValues"]._sender;
      const amount = web3.utils.fromWei(
        events["DepositMade"]["returnValues"]._amount
      );
      setisLoading(false);
      setResult(`Payed ${amount} ETH from: ${sender}`);
    } catch (error) {
      setisLoading(false);
      setResult(error.message);
    }
  };

  const getContractBalance = async () => {
    try {
      setisLoading(true);
      const res = await helloWorldContract.methods.balance().call();
      setisLoading(false);
      setResult(`${web3.utils.fromWei(res)} ETH`);
    } catch (error) {
      setisLoading(false);
      setResult(error.message);
    }
  };

  const withdraw = async () => {
    try {
      setisLoading(true);
      const res = await helloWorldContract.methods
        .withdraw()
        .send({ from: currentAccount[0] });
      setisLoading(false);
      res.status && setResult("Withdraw successful");
    } catch (error) {
      setisLoading(false);
      setResult("Contract balance can only be withdrawn by the owner");
    }
  };

  useEffect(() => {
    try {
      if (typeof window.ethereum !== "undefined") {
        window.ethereum.on("accountsChanged", accountsChangedHandler);
      } else {
        setResult("Install metamask to continue");
      }
    } catch (error) {
      setResult(error.message);
    }
  }, []);

  return (
    <section className="App">
      <div className="container">
        <Result
          loading={isLoading}
          result={result}
          currentAccount={currentAccount}
        />
        <ConnectButton clickHandler={connectAccount} />
        <br />
        <Payment setValue={setValue} clickHandler={pay} />
        <br />
        <Balance clickHandler={getContractBalance} />
        <br />
        <Withdraw clickHandler={withdraw} />
        <br />
      </div>
      <Instructions />
      <Footer />
    </section>
  );
}

export default App;
