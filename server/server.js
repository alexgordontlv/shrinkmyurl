require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const tokenAuth = require("./middlewares/tokenauth");
const PORT = process.env.PORT || "5000";

const USERS = [
  {
    name: "alex",
    email: "alex@gmail.com",
    role: "ADMIN",
    password: "$2b$10$baE6J89.IUC/wrCFVmMrD.eisbJQGaXoOBWBM2GlclzP4MLZAf5mO",
  },
];

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use(cors());
app.use(express.json());

app.post("/login", async (req, res) => {
  const user = USERS.find((user) => user.email === req.body.email);
  if (!user) {
    res.status(400).send("no such user");
  }
  try {
    const hashResponse = await bcrypt.compare(
      req.body?.password,
      user.password
    );

    if (hashResponse) {
      const accessToken = await jwt.sign(
        {
          name: user.name,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "15s",
        }
      );
      console.log(accessToken);
      res.status(200).send(accessToken);
    } else {
      res.status(401).send("Not Allowed");
    }
  } catch (error) {
    res.status(500).send();
  }
});

app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body?.password, 10);
    USERS.push({ email: req.body?.email, password: hashedPassword });
    console.log(USERS);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
  res.status(201).send();
});

app.get("/posts", tokenAuth, (req, res) => {
  console.log(req.user);
  res.send("HIHI");
});
app.use((req, res, next) => {
  console.log("route");
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server is working on port:${PORT}`);
});
