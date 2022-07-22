import React from "react";
import "./Features.scss";
import IconChat from "../../assets/icon-chat.png";
import IconMoney from "../../assets/icon-money.png";
import IconSecurity from "../../assets/icon-security.png";
import PropTypes from "prop-types";

/**
 *@name Features
 @description display images of feature from index page
 * 
 *@param {string} props.image image of feature item
 *@param {string} props.title title of feature item
 *@param {string} props.text text of feature item
 * @returns {JSX.Element}
 */

const Features = (props) => {
  let image = "";

  switch (props.element.img) {
    case "pictureChat":
      image = IconChat;
      break;

    case "pictureMoney":
      image = IconMoney;
      break;

    case "pictureSecurity":
      image = IconSecurity;
      break;
    default:
      break;
  }

  return (
    <div className="feature-item">
      <img src={image} alt={props.element.title} className="feature-icon" />
      <h3 className="feature-item-title">{props.element.title}</h3>
      <p>{props.element.text}</p>
    </div>
  );
};

//
Features.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Features;
