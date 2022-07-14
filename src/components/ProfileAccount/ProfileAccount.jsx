import { Link } from "react-router-dom";
import "./ProfileAccount.scss";

import {
  userBackgroundBlack,
  userBackgroundBlue,
} from "../../features/auth/authSlice";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

const ProfileAccount = ({ title, amount, amountDescription }) => {
  const { isEditMode, isBackground } = useSelector((state) => state.auth);

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{amountDescription}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Link
          to="/transactions"
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

export default ProfileAccount;
