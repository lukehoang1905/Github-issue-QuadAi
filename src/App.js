import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./containers/HomePage.js";
import PublicNavbar from "./components/Navbar/PublicNavbar";

function App() {
  return (
    <>
      <PublicNavbar />
      <HomePage />
    </>
  );
}

export default App;
