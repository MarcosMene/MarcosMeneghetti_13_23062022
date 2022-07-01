import React from "react";
import "./Features.scss";
import IconChat from "../../assets/icon-chat.png";
import IconMoney from "../../assets/icon-money.png";
import IconSecurity from "../../assets/icon-security.png";

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

export default Features;
