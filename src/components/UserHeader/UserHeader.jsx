import { useEffect, useState } from "react";
// import ProfileForm from "../Profileform/ProfileForm";
import { useSelector, useDispatch } from "react-redux";
import "./UserHeader.scss";

import {
  profile,
  profileUpdate,
  userDataEdited,
  userDataCancelled,
  userBackgroundBlack,
  userBackgroundBlue,
  reset,
} from "../../features/auth/authSlice";
import { toast } from "react-toastify";

const UserHeader = () => {
  const dispatch = useDispatch();

  const {
    user,
    firstName,
    lastName,
    message,
    isError,
    isEditMode,
    isBackground,
  } = useSelector((state) => state.auth);

  const stateFirstName = useSelector((state) => state.auth.firstName);
  const stateLastName = useSelector((state) => state.auth.lastName);
  const stateToken = useSelector((state) => state.auth.user.body.token);

  const [firstNameUpdate, setFirstNameUpdate] = useState();
  const [lastNameUpdate, setLastNameUpdate] = useState();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (isError) {
      toast.error(message);
      dispatch(reset());
    }

    dispatch(profile());
  }, [
    user,
    isError,
    message,
    dispatch,
    firstName,
    lastName,
    isEditMode,
    isBackground,
  ]);

  const displayForm = () => {
    setShowForm(true);
    dispatch(userBackgroundBlue());
    dispatch(userDataEdited());
  };
  const hideForm = () => {
    setShowForm(false);
    dispatch(userBackgroundBlack());
  };

  const editUser = (e) => {
    e.preventDefault();

    const userDataUpdate = {
      firstName: firstNameUpdate ? firstNameUpdate : firstName,
      lastName: lastNameUpdate ? lastNameUpdate : lastName,
    };

    if (
      (userDataUpdate.firstName === undefined ||
        userDataUpdate.firstName === null) &&
      (userDataUpdate.lastName === undefined ||
        userDataUpdate.lastName === null)
    ) {
      toast.error("You must fill first name and last name");
    } else {
      dispatch(profileUpdate(userDataUpdate, stateToken));
      setShowForm(false);
      dispatch(userBackgroundBlack());
      dispatch(userDataCancelled());
    }
  };

  if (stateToken) {
    return (
      <div className="header">
        <h1
          className={isBackground ? "header-title black" : "header-title white"}
        >
          Welcome back
          <br />
          <span>{stateFirstName + " " + stateLastName}</span>
        </h1>
        {showForm ? (
          // <section className="form-change-name">
          <form>
            <div className="inputs-form">
              <div className="input-wrapper">
                <label htmlFor="firstName">
                  <input
                    autoComplete="off"
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
                    autoComplete="off"
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
                onClick={(e) => editUser(e)}
              >
                save
              </button>
              <button type="button" className="button-form" onClick={hideForm}>
                cancel
              </button>
            </div>
          </form>
        ) : (
          // </section>
          <button type="submit" className="edit-button" onClick={displayForm}>
            Edit Name
          </button>
        )}
      </div>
    );
  }
};

export default UserHeader;
