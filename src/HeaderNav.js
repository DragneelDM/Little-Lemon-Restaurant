import React, { useState } from "react";
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Logo from "./assets/Logo.svg";
import HomePage from "./HomePage.js";
import AboutPage from "./AboutPage.js";
import MenuPage from "./MenuPage.js";
import ReservationsPage from "./ReservationsPage.js";
import OrderOnlinePage from "./OrderOnlinePage.js";
import LoginPage from "./LoginPage.js";
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
      <Router basename={process.env.PUBLIC_URL}>
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
                    this.state.activeLink === "Menu" ? "active" : ""
                  }`}
                >
                  <Link
                    to="/menu"
                    className="nav-link"
                    onClick={() => this.handleNavLinkClick("Menu")}
                  >
                    Menu
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
              </div>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/reservations" element={<ReservationsPage />} />
            <Route path="/order-online" element={<OrderOnlinePage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </header>
      </Router>
    );
  }
}

export default HeaderNav;
