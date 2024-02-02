import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
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

    return (
        <header className="d-flex justify-content-around h4">
          <img src={Logo} alt="Logo" className="me-5" />
          <nav
            className="navbar navbar-expand-lg bg-body-tertiary navStyle"
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
                      title='#!'
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
                      title='#!'
                    >
                      About
                    </Link>
                  </li>
                  <li
                  className={`nav-item ${
                    this.state.activeLink === "Reservations" ? "active" : ""
                  }`}
                >
                  <Link
                    to="/booking"
                    className="nav-link"
                    onClick={() => this.handleNavLinkClick("Reservations")}
                    title='#!'
                  >
                    Reservations
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    this.state.activeLink === "Orders" ? "active" : ""
                  }`}
                >
                  <Link
                    to="/orders"
                    className="nav-link"
                    onClick={() => this.handleNavLinkClick("Orders")}
                    title='#!'
                  >
                    Orders
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    this.state.activeLink === "Delieveries" ? "active" : ""
                  }`}
                >
                  <Link
                    to="/delieveries"
                    className="nav-link"
                    onClick={() => this.handleNavLinkClick("Delieveries")}
                    title='#!'
                  >
                    Delieveries
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
                    title='#!'
                  >
                    Login
                  </Link>
                </li>
                </ul>
                <Link
                    to="/completed"
                    className="nav-link"
                    onClick={() => this.handleNavLinkClick("Completed")}
                    title='#!'
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
