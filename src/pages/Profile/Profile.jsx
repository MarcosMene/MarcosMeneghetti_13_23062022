import React from "react";
import UserHeader from "../../components/UserHeader/UserHeader";
import ProfileAccount from "../../components/ProfileAccount/ProfileAccount";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { infoProfile } from "../../mock/infoProfile";
import { toast } from "react-toastify";

/**
 * @name Profile
 * @description Create a profile page with welcome back message and the name and last name of user. This show also the accounts available.
 * @returns {JSX.Element}
 */

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, message, isError, isBackground } = useSelector(
    (state) => state.auth
  );

  //if error it will return what kind of error occurs.
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    //it returns to login page if user not found
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate, isError, message, dispatch]);

  if (user) {
    return (
      <main className={isBackground ? "main bg-light" : "main bg-dark"}>
        <UserHeader />
        <h2 className="sr-only">Accounts</h2>
        {infoProfile.map((items) => (
          <ProfileAccount
            title={items.title}
            amount={items.amount}
            amountDescription={items.amountDescription}
            key={items.id}
            singleAccountId={items.id}
          />
        ))}
      </main>
    );
  }
};

export default Profile;
