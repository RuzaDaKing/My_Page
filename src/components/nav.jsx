import React, { useState } from "react";
import book from "../book.svg";
import flask from "../flask.svg";
import logo_github from "../logo_github.svg";
import logo_linkedin from "../logo_linkedin.svg";
import "../App.css";

const Navbar = () => {
  const [isOpen, setOpen] = useState(true);

  return (
    <>
      <div
        onClick={() => {
          console.log("Click on the menu!");
          setOpen(!isOpen);
        }}
        className="Menu"
      >
        <div style={{ visibility: isOpen ? "visible" : "hidden" }}>
          <div className="circle deg-0">
            <img src={book} alt="About" title="About Me" />
          </div>
          <div className="circle deg-90">
            <img src={flask} alt="Projects" title="My Projects" />
          </div>
          <div className="circle deg-180">
            <a href="https://github.com/RuzaDaKing">
              <img src={logo_github} alt="GitHub" title="GitHub" />
            </a>
          </div>
          <div className="circle deg-270">
            <a href="https://www.linkedin.com/in/filip-ruzicka/">
              <img src={logo_linkedin} alt="Linked-In" title="Linked-In" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
