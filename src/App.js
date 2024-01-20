// App.js
import React from 'react';
import HeaderNav from './HeaderNav';
import Main from './Main';
import AboutUS from './AboutUS';
import Footer from './Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {
  return (
    <div className="container">
      <HeaderNav />
      <Main />
      <AboutUS />
      <Footer />
    </div>
  );
};

export default App;
