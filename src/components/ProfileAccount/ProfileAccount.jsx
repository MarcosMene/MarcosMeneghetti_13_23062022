import { Link } from "react-router-dom";
import "./ProfileAccount.scss";

const ProfileAccount = ({ title, amount, amountDescription }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{amountDescription}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Link to="/transactions" className="transaction-button">
          View transactions
        </Link>
      </div>
    </section>
  );
};

export default ProfileAccount;
