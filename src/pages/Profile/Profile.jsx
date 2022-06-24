import React from "react";
import UserHeader from "../../components/UserHeader/UserHeader";
import ProfileAccount from "../../components/ProfileAccount/ProfileAccount";
const Profile = () => {
  return (
    <main className="main bg-dark">
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
