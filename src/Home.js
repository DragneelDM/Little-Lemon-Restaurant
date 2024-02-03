import React from "react";
import HeroImage from "./assets/restauranfood.jpg";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import './App.css';

function Hero() {
  return (
    <div>
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg HeroStyle bodybg">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1 title">Little Lemon</h1>
          <h3 className="text-uppercase h5 subTextStyle">chicago</h3>
          <p className="lead subTextStyle">
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <button
              type="button"
              className="btn btn-lg px-4 me-md-2 fw-bold mt-5 CTAStyle"
            >
              Reserve a Table
            </button>
          </div>
        </div>
        <div className="col-lg-4 offset-lg-1 p-0  shadow-lg">
          <img
            className="rounded-lg-3 rounded-4"
            src={HeroImage}
            alt="Guy Serving Food"
            width="720"
          />
        </div>
      </div>
      <div className="d-flex justify-content-between mt-5">
        <h2 className="text-left">This weeks specials!</h2>
        <button
          type="button"
          className="btn btn-lg px-4 me-md-2 fw-bold CTAStyle"
        >
          Order Menu
        </button>
      </div>
      <Specials />
      <Testimonials />
    </div>
  );
}

export default Hero;
