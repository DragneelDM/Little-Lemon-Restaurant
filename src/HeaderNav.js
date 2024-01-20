import React, { useState } from 'react';
import Logo from './assets/Logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: 'Home', // Set the default active link
    };
  }

  handleNavLinkClick = (link) => {
    this.setState({ activeLink: link });
  };

  render() {
    const navStyle = {
      backgroundColor: '#e3f2fd',
    };

    return (
      <header className="d-flex justify-content-around h4">
        <img src={Logo} alt="Logo" className="me-5" />
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={navStyle}>
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className={`nav-item ${this.state.activeLink === 'Home' ? 'active' : ''}`}>
                  <a className="nav-link" href="#" onClick={() => this.handleNavLinkClick('Home')}>Home</a>
                </li>
                <li className={`nav-item ${this.state.activeLink === 'About' ? 'active' : ''}`}>
                  <a className="nav-link" href="#" onClick={() => this.handleNavLinkClick('About')}>About</a>
                </li>
                <li className={`nav-item ${this.state.activeLink === 'About' ? 'active' : ''}`}>
                  <a className="nav-link" href="#" onClick={() => this.handleNavLinkClick('About')}>Menu</a>
              </li>
              <li className={`nav-item ${this.state.activeLink === 'About' ? 'active' : ''}`}>
                  <a className="nav-link" href="#" onClick={() => this.handleNavLinkClick('About')}>Reservations</a>
              </li>
              <li className={`nav-item ${this.state.activeLink === 'About' ? 'active' : ''}`}>
                  <a className="nav-link" href="#" onClick={() => this.handleNavLinkClick('About')}>Order Online</a>
              </li>
              <li className={`nav-item ${this.state.activeLink === 'About' ? 'active' : ''}`}>
                  <a className="nav-link" href="#" onClick={() => this.handleNavLinkClick('About')}>Login</a>
              </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default HeaderNav;
