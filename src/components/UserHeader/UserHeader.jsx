import { useEffect, useState } from "react";
// import ProfileForm from "../Profileform/ProfileForm";
import { useSelector, useDispatch } from "react-redux";
import "./UserHeader.scss";

import { profile, profileUpdate } from "../../features/auth/authSlice";

const UserHeader = () => {
  const dispatch = useDispatch();

  const { user, firstName, lastName, message, isError } = useSelector(
    (state) => state.auth
  );

  const stateFirstName = useSelector((state) => state.auth.firstName);
  const stateLastName = useSelector((state) => state.auth.lastName);
  const stateToken = useSelector((state) => state.auth.user.body.token);
  console.log(stateToken);
  const [firstNameUpdate, setFirstNameUpdate] = useState();
  const [lastNameUpdate, setLastNameUpdate] = useState();
  const [showForm, setShowForm] = useState("false");

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(profile());
  }, [user, isError, message, dispatch, firstName, lastName]);

  const displayForm = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };

  const editUser = () => {
    const userDataUpdate = {
      firstNameUpdate,
      lastNameUpdate,
    };

    dispatch(profileUpdate(userDataUpdate, stateToken));
    setShowForm(!showForm);
  };

  if (stateToken) {
    return (
      <div className="header">
        <h1>
          Welcome back
          <br />
          <span>{stateFirstName + " " + stateLastName}</span>
        </h1>
        {showForm ? (
          <button className="edit-button" onClick={displayForm}>
            Edit Name
          </button>
        ) : (
          // <section className="form-change-name">
          <form>
            <div className="inputs-form">
              <div className="input-wrapper">
                <label htmlFor="firstName">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder={firstName}
                    onChange={(e) => setFirstNameUpdate(e.target.value)}
                  />
                </label>
              </div>
              <div className="input-wrapper">
                <label htmlFor="lastName">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder={lastName}
                    onChange={(e) => setLastNameUpdate(e.target.value)}
                  />
                </label>
              </div>
            </div>
            <div className="form-buttons">
              <button
                className="button-form"
                type="submit"
                onClick={() => editUser()}
              >
                save
              </button>
              <button className="button-form" onClick={displayForm}>
                cancel
              </button>
            </div>
          </form>
          // </section>
        )}
      </div>
    );
  }
};

export default UserHeader;
