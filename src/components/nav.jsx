import React, { useState } from "react";
import book from "../book.svg";
import flask from "../flask.svg";
import logo_github from "../logo_github.svg";
import logo_linkedin from "../logo_linkedin.svg";
import "../App.css";

const Navbar = () => {
  const [isOpen, setOpen] = useState(true);
  const navbuttons = [
    {
      label: <img src={book} alt="About" title="About Me" />,
      link: "",
    },
    {
      label: <img src={flask} alt="Projects" title="My Projects" />,
      link: "",
    },
    {
      label: <img src={logo_github} alt="GitHub" title="GitHub" />,
      link: "https://github.com/RuzaDaKing",
    },
    {
      label: <img src={logo_linkedin} alt="Linked-In" title="Linked-In" />,
      link: "https://www.linkedin.com/in/filip-ruzicka/",
    },
  ];
  return (
    <>
      <div
        onClick={() => {
          setOpen(!isOpen);
        }}
        className="Menu"
      >
        <div style={{ visibility: isOpen ? "visible" : "hidden" }}>
          <div className="Menu">
            {navbuttons.map((btn, index) => (
              <a
                key={index}
                href={btn.link}
                className={`orbit-button orbit-${index + 1}`}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;