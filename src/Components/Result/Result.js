import React from "react";
import "./Result.css";

const Result = ({ result, currentAccount, loading }) => {
  return (
    <div className="result">
      <p className="result-text">
        {loading ? `Loading... Do not refresh or exit from the dapp.` : result}
      </p>
      {currentAccount && (
        <p className="account"> Current connected account: {currentAccount} </p>
      )}
    </div>
  );
};

export default Result;
