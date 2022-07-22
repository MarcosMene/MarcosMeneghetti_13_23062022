import React from "react";
import "./ProfileForm.scss";

/**
 * @name ProfileForm
 * @description create a form to change or not the first name and last name of user.
 * @returns {JSX.Element}
 */

const ProfileForm = () => {
  return (
    <section className="form-change-name">
      <form>
        <div className="inputs-form">
          <div className="input-wrapper">
            <input type="text" id="firstname" placeholder="Tony" />
          </div>
          <div className="input-wrapper">
            <input type="text" id="lastname" placeholder="Stark" />
          </div>
        </div>
        <div className="form-buttons">
          <button className="button-form">save</button>
          <button className="button-form">cancel</button>
        </div>
      </form>
    </section>
  );
};

export default ProfileForm;
