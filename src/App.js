import React from 'react';
import HeaderNav from './HeaderNav';
import Footer from './Footer';
import Main from './Main.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <div className="container">
        <HeaderNav />
        <Main />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
