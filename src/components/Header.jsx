import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is included
import '../styles/Header.css'; // Link to the custom CSS file for hover effects

function Header() {
  return (
    <header className="bg-green text-white p-4 shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="fw-bold">Abreham Amesa</h1>
        <nav className="d-flex">
          <a className="nav-link text-white mx-3 hover-effect" href="#about">
            About
          </a>
          <a className="nav-link text-white mx-3 hover-effect" href="#projects">
            Projects
          </a>
          <a className="nav-link text-white mx-3 hover-effect" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
