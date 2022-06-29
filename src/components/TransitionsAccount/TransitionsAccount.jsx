import React from "react";
import "./TransitionsAccount.scss";

const TransactionsAccount = ({ title, amount, amountDescription }) => {
  return (
    <section className="transition-account">
      <div className="transition-account-content-wrapper">
        <h3 className="transition-account-title">{title}</h3>
        <p className="transition-account-amount">{amount}</p>
        <p className="transition-account-amount-description">
          {amountDescription}
        </p>
      </div>
    </section>
  );
};

export default TransactionsAccount;
