import React from "react";
import "./header.styles.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <div>LOGO</div>
      </div>
      <div className="header__center">
        <div>HOME</div>
        <div>PROFILE</div>
        <div>ADMIN PANEL</div>
      </div>
      <div className="header__right">
        <div>LOGIN</div>
        <div>LOGOUT</div>
      </div>
    </div>
  );
};

export default Header;
