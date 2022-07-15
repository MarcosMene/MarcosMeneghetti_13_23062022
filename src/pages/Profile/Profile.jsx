import React from "react";
import UserHeader from "../../components/UserHeader/UserHeader";
import ProfileAccount from "../../components/ProfileAccount/ProfileAccount";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { userDataEdited } from "../../features/auth/authSlice";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, message, isError, isBackground } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    // dispatch(profile());
  }, [user, navigate, isError, message, dispatch]);
  if (user) {
    return (
      <main className={isBackground ? "main bg-light" : "main bg-dark"}>
        <UserHeader />
        <h2 className="sr-only">Accounts</h2>

        <ProfileAccount
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          amountDescription="Available Balance"
        />
        <ProfileAccount
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          amountDescription="Available Balance"
        />
        <ProfileAccount
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          amountDescription="Current Balance"
        />
      </main>
    );
  }
};

export default Profile;
