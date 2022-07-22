import { Link } from "react-router-dom";
import "./ProfileAccount.scss";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

/**
 * @name ProfileAccount
 * @param {string} title title of profile account
 * @param {string} amount amount of profile account
 * @param {string} amountDescription description of amount
 * @param {number} singleAccountId id of profile account
 * @returns {JSX.Element}
 */

const ProfileAccount = ({
  title,
  amount,
  amountDescription,
  singleAccountId,
}) => {
  const { isBackground } = useSelector((state) => state.auth);
  const accountId = singleAccountId;

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{amountDescription}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Link
          to={`/transactions/${accountId}`}
          className={
            isBackground
              ? "transaction-button blue"
              : "transaction-button green"
          }
        >
          View transactions
        </Link>
      </div>
    </section>
  );
};

//profile account proptype
ProfileAccount.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.string,
  amountDescription: PropTypes.string,
  singleAccountId: PropTypes.number,
};

export default ProfileAccount;
