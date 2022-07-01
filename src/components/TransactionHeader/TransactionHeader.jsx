import React from "react";
import "./TransactionHeader.scss";

const TransactionsHeader = ({ title, amount, amountDescription }) => {
  return (
    <section className="transaction-account">
      <div className="transaction-account-content-wrapper">
        <h3 className="transaction-account-title">{title}</h3>
        <p className="transaction-account-amount">{amount}</p>
        <p className="transaction-account-amount-description">
          {amountDescription}
        </p>
      </div>
    </section>
  );
};

export default TransactionsHeader;
