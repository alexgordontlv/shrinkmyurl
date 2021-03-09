import React from "react";
import Header from "./components/header/Header";
import Mainpage from "./pages/main/Mainpage";
import "./app.styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./context/user.context";

function App() {
  return (
    <Router>
      <UserProvider>
        <div className="app">
          <Header />
          <Mainpage />
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
