import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import "./TransactionDescription.scss";

const TransactionDescription = () => {
  return (
    <div className="transaction-description">
      <div className="transaction-type">
        <p>Transaction Type: </p> <span>Eletronic</span>
      </div>
      <div className="transaction-category">
        <p>Category: </p> <span>Food</span>{" "}
        <span>
          <FontAwesomeIcon icon={faPencil} />
        </span>
      </div>
      <div className="transaction-notes">
        <p>Notes: </p>
        <span>
          <FontAwesomeIcon icon={faPencil} />
        </span>
      </div>
    </div>
  );
};

export default TransactionDescription;
