import React from 'react'
import CardImg1 from "./assets/greek salad.jpg";
import CardImg2 from "./assets/bruchetta.png";
import CardImg3 from "./assets/lemon dessert.jpg";

function Specials() {

  const CTAStyle = {
    background: "#F4CE14",
  };

  return (
    <div>
        <div className="d-flex justify-content-between">
        <h2 className="text-left">This weeks specials!</h2>
        <button
          type="button"
          className="btn btn-lg px-4 me-md-2 fw-bold"
          style={CTAStyle}
        >
          Order Menu
        </button>
      </div>
      <div className="container mt-4">
        <div className="row text-left">
          <div className="col-md-4 pb-1 pb-md-0 p-0">
            <div className="card rounded-top-5">
              <img
                className="card-img-top rounded-top-5"
                src={CardImg1}
                alt="Card image cap "
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">Greek Salad</h5>
                  <p>$12.99</p>
                </div>
                <p className="card-text">
                  The famous greek salad of cripsy lettuce, peppers, olives and
                  our chicago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons.
                </p>
                <p href="#" className="">
                  Order a Delivery
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 pb-1 pb-md-0">
            <div className="card rounded-top-5">
              <img
                className="card-img-top rounded-top-5"
                src={CardImg2}
                alt="Card image cap "
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">Bruchetta</h5>
                  <p>$12.99</p>
                </div>
                <p className="card-text">
                  Our Bruchetta is made from grilled bread that has been
                  smeared with garlic and seasoned with salt and olive oil.
                  Special orders apply
                </p>
                <p href="#" className="">
                  Order a Delivery
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 pb-1 pb-md-0">
            <div className="card rounded-top-5">
              <img
                className="card-img-top rounded-top-5"
                src={CardImg3}
                alt="Card image cap "
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">Lemon Dessert</h5>
                  <p>$12.99</p>
                </div>
                <p className="card-text">
                  This comes straight from grandma's recipe book,
                  every last ingredient has been sourced and is as authentic
                  as can be imagined.
                </p>
                <p href="#" className="">
                  Order a Delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>

    </div>
  )
}

export default Specials