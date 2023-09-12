import React, { FormEvent, useContext, useState } from "react";
import "./App.css";
import Profilovka from "./Profilovka.jpg";
import Navbar from "./components/nav";

function App() {
  return (
    <>
      <div className="Home">
        <div className="Hero-loader"></div>
        <img src={Profilovka} className="Hero-image" alt="Me" />
        <Navbar />
      </div>
    </>
  );
}

export default App;
