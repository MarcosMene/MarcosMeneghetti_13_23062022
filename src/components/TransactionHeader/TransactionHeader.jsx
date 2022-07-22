import React from "react";
import "./TransactionHeader.scss";
import PropTypes from "prop-types";

/**
 * @name TransactionsHeader
 * @description show the account clicked on the profile page inside transactions page as the header of transactions.
 * @param {string} title
 * @param {string} amount
 * @param {string} amountDescription
 * @returns {JSX.Element}
 */

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

//profile account inside transaction page
TransactionsHeader.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.string,
  amountDescription: PropTypes.string,
};

export default TransactionsHeader;
