import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Logo from "./assets/Logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: "Home", // Set the default active link
    };
  }

  handleNavLinkClick = (link) => {
    this.setState({ activeLink: link });
  };

  render() {
    const navStyle = {
      backgroundColor: "#e3f2fd",
    };

    return (
        <header className="d-flex justify-content-around h4">
          <img src={Logo} alt="Logo" className="me-5" />
          <nav
            className="navbar navbar-expand-lg bg-body-tertiary"
            style={navStyle}
          >
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li
                    className={`nav-item ${
                      this.state.activeLink === "Home" ? "active" : ""
                    }`}
                  >
                    <Link
                      to="/"
                      className="nav-link"
                      onClick={() => this.handleNavLinkClick("Home")}
                    >
                      Home
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      this.state.activeLink === "About" ? "active" : ""
                    }`}
                  >
                    <Link
                      to="/about"
                      className="nav-link"
                      onClick={() => this.handleNavLinkClick("About")}
                    >
                      About
                    </Link>
                  </li>
                  <li
                  className={`nav-item ${
                    this.state.activeLink === "Booking" ? "active" : ""
                  }`}
                >
                  <Link
                    to="/booking"
                    className="nav-link"
                    onClick={() => this.handleNavLinkClick("Booking")}
                  >
                    Bookings
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    this.state.activeLink === "Reservations" ? "active" : ""
                  }`}
                >
                  <Link
                    to="/reservations"
                    className="nav-link"
                    onClick={() => this.handleNavLinkClick("Reservations")}
                  >
                    Reservations
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    this.state.activeLink === "OrderOnline" ? "active" : ""
                  }`}
                >
                  <Link
                    to="/order-online"
                    className="nav-link"
                    onClick={() => this.handleNavLinkClick("OrderOnline")}
                  >
                    Order Online
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    this.state.activeLink === "Login" ? "active" : ""
                  }`}
                >
                  <Link
                    to="/login"
                    className="nav-link"
                    onClick={() => this.handleNavLinkClick("Login")}
                  >
                    Login
                  </Link>
                </li>
                </ul>
                <Link
                    to="/completed"
                    className="nav-link"
                    onClick={() => this.handleNavLinkClick("Completed")}
                  >
                  </Link>
              </div>
            </div>
          </nav>
        </header>
    );
  }
}

export default HeaderNav;
