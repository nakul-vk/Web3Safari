import React from "react";

const Balance = ({ clickHandler }) => {
  return (
    <div className="contract-balance">
      <button onClick={clickHandler}>Balance</button>
    </div>
  );
};

export default Balance;
