import TransactionsAccount from "../../components/TransactionHeader/TransactionHeader";
import Accordeons from "../../components/Accordeons/Accordeons";
import { infoTransactions } from "../../mock/infoTransactions";
import "./TransactionsTitles.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Transactions = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <main>
      <TransactionsAccount
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        amountDescription="Available Balance"
      />
      <section className="main bg-light">
        <h2 className="sr-only">transactions list</h2>
        <div className="transactions">
          <div className="transactions-wrapper">
            <div className="transactions-list-title">
              <p className="transactions-list-text"></p>
              <p className="transactions-list-text">DATE</p>
              <p className="transactions-list-text">DESCRIPTION</p>
              <p className="transactions-list-text">AMOUNT</p>
              <p className="transactions-list-text">BALANCE</p>
            </div>
            <div className="accordeons-list">
              {infoTransactions.map((props, index) => (
                <Accordeons
                  date={props.date}
                  description={props.description}
                  amount={props.amount}
                  balance={props.balance}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Transactions;
