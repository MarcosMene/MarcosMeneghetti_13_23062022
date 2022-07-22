import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./Accordeons.scss";
import TransactionDescription from "../AccordeonDescription/AccordeonDescription";
import PropTypes from "prop-types";

/**
 * @name Accordeons transactions
 * @description create accordeons with information with transactions
 * @param {string} date data of transaction
 * @param {string} description description of transaction
 * @param {string} amount amount of transaction
 * @param {string} balance balance of transaction
 *
 * @returns {JSX.Element}
 */

const Accordeons = ({ date, description, amount, balance }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="accordeons">
      <header>
        <div className="accordeon">
          <div className="accordeon-icon">
            <button className="btn" onClick={() => setExpanded(!expanded)}>
              {expanded ? (
                <FontAwesomeIcon icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
            </button>
          </div>
          <div className="accordeon-date">{date}</div>
          <div className="accordeon-description">{description}</div>
          <div className="accordeon-amount">{amount}</div>
          <div className="accordeon-balance">{balance}</div>
        </div>
      </header>
      {expanded && <TransactionDescription />}
    </article>
  );
};

//proptypes for Accordeons
Accordeons.propTypes = {
  date: PropTypes.string,
  description: PropTypes.string,
  amount: PropTypes.string,
  balance: PropTypes.string,
};

export default Accordeons;
