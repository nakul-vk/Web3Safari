import React from "react";

const ConnectButton = ({ clickHandler }) => {
  return (
    <div className="connect-btn-wrapper">
      <button onClick={clickHandler}>Connect</button>
    </div>
  );
};

export default ConnectButton;
