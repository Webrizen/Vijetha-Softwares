import React from "react";
import "../styles/Navbar.css";
import Logo from "../assets/logo.webp";

export default function Navbar() {
  function toggleNavbar() {
    var x = document.getElementById("menu");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }
  function disable() {
    document.getElementById("menu").style.display = "none";
  }
  return (
    <>
      <header>
        <a href="/">
        <div className="logo">
          <img src={Logo} alt="Vijetha Software's Private Limited" />
          <span>Vijetha Softwares</span>
        </div>
        </a>
        <div className="ico" onClick={toggleNavbar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </div>
        <div className="links" id="menu">
          <a href="#" onClick={disable}>Services</a>
          <a href="#" onClick={disable}>Portfolio</a>
          <a href="#" onClick={disable}>Products</a>
          <a href="#" className="active" onClick={disable}>
            Connect
          </a>
        </div>
      </header>
    </>
  );
}
