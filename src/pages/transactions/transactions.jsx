import TransactionsAccount from "../../components/TransactionHeader/TransactionHeader";
import Accordeons from "../../components/Accordeons/Accordeons";
import { infoTransactions } from "../../mock/infoTransactions";
import { infoProfile } from "../../mock/infoProfile";
import "./transactions.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userBackgroundBlack } from "../../features/auth/authSlice";

const Transactions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { accountId } = useParams();

  const Single_Account_Mock = infoProfile.find(
    (account) => account.id === parseInt(accountId)
  );

  const { user, isBackground } = useSelector((state) => state.auth);

  const backButton = () => {
    navigate(-1);
    if (isBackground) {
      dispatch(userBackgroundBlack());
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, isBackground, navigate]);

  if (user) {
    return (
      <main>
        <button className="back-button" onClick={backButton}>
          <span className="back-icon">
            <FontAwesomeIcon icon={faArrowLeftLong} />
          </span>

          <span className="back-text">Back</span>
        </button>

        <TransactionsAccount
          key={Single_Account_Mock.id}
          title={Single_Account_Mock.title}
          amount={Single_Account_Mock.amount}
          amountDescription={Single_Account_Mock.amountDescription}
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
  }
};

export default Transactions;
