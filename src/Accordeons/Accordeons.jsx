import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./Accordeons.scss";
import TransactionDescription from "../components/TransactionDescription/TransactionDescription";

const Accordeons = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="accordeons">
      <header>
        <div className="accordeon">
          <div className="accordeon-icon">
            <button className="btn" onClick={() => setExpanded(!expanded)}>
              {expanded ? (
                <FontAwesomeIcon icon={faChevronUp} size="2x" />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} size="2x" />
              )}
            </button>
          </div>

          <div className="accordeon-date">June 20th, 2020</div>
          <div className="accordeon-description">Golden Sun Bakery</div>
          <div className="accordeon-amount">$5.00</div>
          <div className="accordeon-balance">$2082.79</div>
        </div>
      </header>
      {expanded && <TransactionDescription />}
    </article>
  );
};

export default Accordeons;
