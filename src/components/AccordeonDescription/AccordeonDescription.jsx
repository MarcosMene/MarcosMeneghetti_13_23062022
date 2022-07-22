import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import "./AccordeonDescription.scss";

/**
 * @name TransactionDescription
 * @description create a transaction description inside a accordeon. It has three types of elements: Transaction type, Category and Notes. In Category and Notes, the user can change the name of those categories if he clicks over a icon(pencil).
 * @returns {JSX.Element}
 */

const TransactionDescription = () => {
  //start accordeon with expand false
  const [expandCategory, setExpandCategory] = useState(false);
  const [expandNotes, setExpandNotes] = useState(false);

  //show-hide form category inside accordeon
  const handleFormCategory = (e) => {
    e.preventDefault();
    setExpandCategory(!expandCategory);
  };

  //show-hide form notes inside accordeon
  const handleFormNotes = (e) => {
    e.preventDefault();
    setExpandNotes(!expandNotes);
  };

  return (
    <div className="transaction-description">
      <div className="transaction-type">
        <p>Transaction Type: </p> <span>Eletronic</span>
      </div>
      <div className="transaction-category">
        <p>Category: </p> <span>Food</span>
        <span
          className="transaction-icon"
          onClick={() => setExpandCategory(!expandCategory)}
        >
          <FontAwesomeIcon icon={faPencil} />
        </span>
        {expandCategory && (
          <div className="transaction-category-input">
            <form className="form-horizontal">
              <input type="text" id="username" />
              <button
                type="submit"
                onClick={handleFormCategory}
                className="sign-in-button short"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
      <div className="transaction-notes">
        <p>Notes: </p>
        <span
          className="transaction-icon"
          onClick={() => setExpandNotes(!expandNotes)}
        >
          <FontAwesomeIcon icon={faPencil} />
        </span>
        {expandNotes && (
          <div className="transaction-category-input">
            <form className="form-horizontal">
              <input type="text" id="username" />
              <button
                type="submit"
                onClick={handleFormNotes}
                className="sign-in-button short"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionDescription;
