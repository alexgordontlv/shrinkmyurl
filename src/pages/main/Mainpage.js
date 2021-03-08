import React from "react";
import "./mainpage.styles.css";
import Login from "../login/Login";
import Register from "../register/Register";
const Mainpage = () => {
  return (
    <div className="main">
      <Login />
      <Register />
    </div>
  );
};

export default Mainpage;
