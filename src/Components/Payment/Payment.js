import React from "react";
import "./Payment.css";

const Payment = ({ setValue, clickHandler }) => {
  return (
    <div className="payment-wrapper">
      <input
        type="number"
        className="pay-input"
        onChange={(e) => setValue(e.target.value)}
        placeholder="0.5"
      />
      <button className="pay-btn" onClick={clickHandler}>
        Pay
      </button>
    </div>
  );
};

export default Payment;
