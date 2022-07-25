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
import NotFound from "../NotFound/NotFound";

/**
 * @name Transactions
 * @description create a transaction page with the id of account clicked on the profile page
 * @returns {JSX.Element}
 */

const Transactions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //accountId is a string
  let { accountId } = useParams();

  //convert accountId into number
  let accountIdNumber = parseInt(accountId, 10);

  //get the length of arry infoProfile
  const AccountMockLenght = infoProfile.length;
  const SingleAccountMock = infoProfile.find(
    (account) => account.id === parseInt(accountId)
  );

  const { user, isBackground } = useSelector((state) => state.auth);

  //button to return profile page
  const backButton = () => {
    navigate("/profile");
    if (isBackground) {
      dispatch(userBackgroundBlack());
    }
  };

  //if user is not connected go to login page
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, isBackground, navigate]);

  //if url id is not a number, page not found
  if (isNaN(accountIdNumber)) {
    return <NotFound />;
  } else {
    if (user) {
      return (
        <main>
          {accountIdNumber > AccountMockLenght || accountIdNumber < 1 ? (
            <div></div>
          ) : (
            <button className="back-button" onClick={backButton}>
              <span className="back-icon">
                <FontAwesomeIcon icon={faArrowLeftLong} />
              </span>

              <span className="back-text">Back</span>
            </button>
          )}

          {accountIdNumber > AccountMockLenght || accountIdNumber < 1 ? (
            <NotFound />
          ) : (
            <>
              <TransactionsAccount
                key={SingleAccountMock.id}
                title={SingleAccountMock.title}
                amount={SingleAccountMock.amount}
                amountDescription={SingleAccountMock.amountDescription}
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
                      {infoTransactions.map((items, index) => (
                        <Accordeons
                          date={items.date}
                          description={items.description}
                          amount={items.amount}
                          balance={items.balance}
                          key={index}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}
        </main>
      );
    }
  }
};

export default Transactions;
