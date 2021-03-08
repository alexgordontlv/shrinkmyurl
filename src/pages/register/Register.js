import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./register.styles.css";
import { useStyles } from "../login/material.styles";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validatepassword, setValidatePassword] = useState("");

  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
    setPassword("");
    setEmail("");
    setValidatePassword("");
  };
  return (
    <div className="register">
      <h3>Register</h3>
      <form className="form" noValidate>
        <TextField
          className={classes.textfield}
          label="Email"
          name="userEmail"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          variant="outlined"
          required
        />
        <TextField
          className={classes.textfield}
          label="Password"
          name="userPassword"
          value={password}
          type="password"
          variant="outlined"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          className={classes.textfield}
          label="Validate Password"
          name="userPassword"
          value={validatepassword}
          type="password"
          variant="outlined"
          required
          onChange={(e) => setValidatePassword(e.target.value)}
        />
        <Button
          variant="outlined"
          onClick={handleSubmit}
          type="submit"
          color="primary"
          className={classes.button}
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
