import React from "react";

const Withdraw = ({ clickHandler }) => {
  return (
    <div className="withdraw">
      <button onClick={clickHandler}>Withdraw</button>
    </div>
  );
};

export default Withdraw;
