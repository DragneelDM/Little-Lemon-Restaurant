import React from 'react';
import HeaderNav from './HeaderNav';
import Footer from './Footer';
import Main from './Main';
import AboutPage from './AboutPage';
import ReservationsPage from "./ReservationsPage";
import OrderOnlinePage from "./OrderOnlinePage";
import LoginPage from "./LoginPage";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="container">
        <HeaderNav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Add more routes for other pages */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
