import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./login.styles.css";
import { useStyles } from "./material.styles";
import axios from "../../utilities/axios/axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const respone = await axios.post("/login", {
        email,
        password,
      });
      const accessToken = respone.data;
      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

      await delay(10000);
      console.log("hi2");
      const ans = await axios.get("/posts", {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      });
      console.log("ans", ans);
    } catch (error) {
      console.log("ERROR:", error);
    }
    setPassword("");
    setEmail("");
  };

  return (
    <div className="login">
      <h3>Sign In</h3>
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
        <Button
          variant="outlined"
          onClick={handleSubmit}
          type="submit"
          color="primary"
          className={classes.button}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default Login;
