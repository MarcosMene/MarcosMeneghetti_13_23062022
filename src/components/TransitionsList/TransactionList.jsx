import "./TransactionList.scss";

import Accordeons from "../../Accordeons/Accordeons";

const TransitionList = () => {
  return (
    <div className="transitions">
      <div className="transitions-wrapper">
        <div className="transitions-list-title">
          <p className="transitions-list-text"></p>
          <p className="transitions-list-text">DATE</p>
          <p className="transitions-list-text">DESCRIPTION</p>
          <p className="transitions-list-text">AMOUNT</p>
          <p className="transitions-list-text">BALANCE</p>
        </div>
        <div className="accordeons-list">
          <Accordeons />
          <Accordeons />
          <Accordeons />
          <Accordeons />
        </div>
      </div>
    </div>
  );
};

export default TransitionList;
