import React from "react";
import UserHeader from "../../components/UserHeader/UserHeader";
import ProfileAccount from "../../components/ProfileAccount/ProfileAccount";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { profile } from "../../features/profile/profileSlice";
const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  dispatch(profile(user));

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <main className="main bg-dark">
      <div>{user.body.token}</div>
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
};

export default Profile;
