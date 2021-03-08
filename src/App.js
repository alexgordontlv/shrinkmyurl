import React from "react";
import Header from "./components/header/Header";
import Mainpage from "./pages/main/Mainpage";
import "./app.styles.css";
function App() {
  return (
    <div className="app">
      <Header />
      <Mainpage />
    </div>
  );
}

export default App;
