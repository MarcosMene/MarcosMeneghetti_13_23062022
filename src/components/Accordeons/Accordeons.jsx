import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./Accordeons.scss";
import TransactionDescription from "../AccordeonDescription/AccordeonDescription";

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

export default Accordeons;
