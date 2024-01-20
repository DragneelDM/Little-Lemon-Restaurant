// Main.js
import React from 'react';
import HeroImage from './assets/restauranfood.jpg'
import CardImg1 from './assets/greek salad.jpg';
import CardImg2 from './assets/bruchetta.png';
import CardImg3 from './assets/lemon dessert.jpg';
import './Main.css';

const Main = () => {
  const HeroStyle = {
    position: 'relative',
    background: 'linear-gradient(90deg, #407857 65%, #427757 48.75%, #457657 32.5%, #497457 0%)',
  };
  const TitleStyle = {
    color: '#F4CE14',
  };

  const subTextStyle = {
    color: '#FFF',
  };

  const CTAStyle = {
    background: '#F4CE14',
  };
  return (
    <main>
      <hero className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg" style={HeroStyle}>
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1" style={TitleStyle}>Little Lemon</h1>
          <h3 className="text-uppercase" style={subTextStyle}>chicago</h3>
          <p className="lead" style={subTextStyle}>
            We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <button type="button" className="btn btn-lg px-4 me-md-2 fw-bold mt-5" style={CTAStyle}>
              Reserve a Table
            </button>
          </div>
        </div>
          <div className="col-lg-4 offset-lg-1 p-0  shadow-lg">
            <img className="rounded-lg-3 rounded-4" src={HeroImage} alt="Guy Serving Food" width="720"/>
          </div>
        </div>
      </hero>

      {/* ------------------------------Specials ----------------------------------- */}

      <div className="d-flex justify-content-between">
        <h2 className="text-left">This weeks specials!</h2>
        <button type="button" className="btn btn-lg px-4 me-md-2 fw-bold" style={CTAStyle}>
          Order Menu
        </button>
      </div>
    <div className="container mt-4">
      <div className="row text-left">
        <div className="col-md-4 pb-1 pb-md-0">
          <div className="card rounded-top-5">
            <img className="card-img-top rounded-top-5" src={CardImg1} alt="Card image cap " />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">Greek Salad</h5>
                <p>$12.99</p>
              </div>
              <p className="card-text">The famous greek salad of cripsy lettuce, peppers, olives and our chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
              <p href="#" className="">Order a Delivery</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 pb-1 pb-md-0">
          <div className="card rounded-top-5">
            <img className="card-img-top rounded-top-5" src={CardImg2} alt="Card image cap " />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">Greek Salad</h5>
                <p>$12.99</p>
              </div>
              <p className="card-text">The famous greek salad of cripsy lettuce, peppers, olives and our chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
              <p href="#" className="">Order a Delivery</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 pb-1 pb-md-0">
          <div className="card rounded-top-5">
            <img className="card-img-top rounded-top-5" src={CardImg3} alt="Card image cap " />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">Lemon Dessert</h5>
                <p>$12.99</p>
              </div>
              <p className="card-text">The famous greek salad of cripsy lettuce, peppers, olives and our chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
              <p href="#" className="">Order a Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr></hr>

    {/* ------------------------------ Testimonials ----------------------------------- */}
    <div class="container border-box">
            <div class="row justify-content-around">
              <div class="card mb-3 customCard">
                <div class="row g-0 align-items-center">
                  <div class="col-md-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
                      alt="Trendy Pants and Shoes"
                      class="img-fluid rounded-5"
                    />
                    </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        I like them
                      </p>
                      <p class="card-text">
                        <small class="text-muted">Last updated 3 mins ago</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-3 customCard">
                <div class="row g-0 align-items-center">
                  <div class="col-md-4">
                    <img class="img-fluid d-flex mx-auto rounded-5" src="https://i.imgur.com/Uz4FjGZ.jpg"/>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        Very Good
                      </p>
                      <p class="card-text">
                        <small class="text-muted">Last updated 3 mins ago</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-3 customCard">
                <div class="row g-0 align-items-center">
                  <div class="col-md-4">
                    <img class="img-fluid d-flex mx-auto rounded-5" src="https://i.imgur.com/udGH5tO.jpg"/>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        Makes Sense
                      </p>
                      <p class="card-text">
                        <small class="text-muted">Last updated 3 mins ago</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-3 customCard">
                <div class="row g-0 align-items-center">
                  <div class="col-md-4">
                    <img class="img-fluid d-flex mx-auto rounded-5" src="https://media.sciencephoto.com/image/p7010300/800wm/P7010300-Smiling_face.jpg"/>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        Best Place
                      </p>
                      <p class="card-text">
                        <small class="text-muted">Last updated 3 mins ago</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </main>
  );
};

export default Main;
