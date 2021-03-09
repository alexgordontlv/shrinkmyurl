import React from "react";
import "./mainpage.styles.css";
import Login from "../login/Login";
import Register from "../register/Register";
import { Switch, Route } from "react-router-dom";

const Mainpage = () => {
  return (
    <div className="main">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
      </Switch>
    </div>
  );
};

export default Mainpage;
