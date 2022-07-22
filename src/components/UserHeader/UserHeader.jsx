import { useEffect, useState } from "react";
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

/**
 * @name UserHeader
 * @description It will show the name and last name of user with welcome (firstname) and (lastname). When edit name clicked, it will show a form with options first name and last name. The user can change his name or last name if he wants. When the edit name button clicked, the background of main div change the color.
 * @returns {JSX.Element}
 */

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

  //useState to update or not the name and last name of user
  const [firstNameUpdate, setFirstNameUpdate] = useState();
  const [lastNameUpdate, setLastNameUpdate] = useState();

  //useState show form when edit name button clicked
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

  //display a form with first name and last name and background change color to light blue
  const displayForm = () => {
    setShowForm(true);
    dispatch(userBackgroundBlue());
    dispatch(userDataEdited());
  };

  //hide form with first name and last name and background change color to black
  const hideForm = () => {
    setShowForm(false);
    dispatch(userBackgroundBlack());
  };

  //fuction to update or not the name and last name of user
  const editUser = (e) => {
    e.preventDefault();

    const userDataUpdate = {
      firstName: firstNameUpdate ? firstNameUpdate : firstName,
      lastName: lastNameUpdate ? lastNameUpdate : lastName,
    };

    dispatch(profileUpdate(userDataUpdate, stateToken));
    setShowForm(false);
    dispatch(userBackgroundBlack());
    dispatch(userDataCancelled());
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
          <button type="submit" className="edit-button" onClick={displayForm}>
            Edit Name
          </button>
        )}
      </div>
    );
  }
};

export default UserHeader;
