import React from "react";
import UserHeader from "../../components/UserHeader/UserHeader";
import ProfileAccount from "../../components/ProfileAccount/ProfileAccount";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { infoProfile } from "../../mock/infoProfile";
import { toast } from "react-toastify";
// import { userDataEdited } from "../../features/auth/authSlice";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, message, isError, isBackground } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
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
        {infoProfile.map((props) => (
          <ProfileAccount
            title={props.title}
            amount={props.amount}
            amountDescription={props.amountDescription}
            key={props.id}
            singleAccountId={props.id}
          />
        ))}
      </main>
    );
  }
};

export default Profile;
