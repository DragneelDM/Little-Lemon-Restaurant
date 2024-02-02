import React from "react";
import CardImg1 from "./assets/greek salad.jpg";
import CardImg2 from "./assets/bruchetta.png";
import CardImg3 from "./assets/lemon dessert.jpg";

function Specials() {
  return (
    <div>
      <div className="container mt-4">
        <div className="row text-left">
          <div className="col-md-4 pb-1 pb-md-0 p-0">
            <div className="card rounded-top-5">
              <img
                className="card-img-top rounded-top-5"
                src={CardImg1}
                alt="Card cap "
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
                alt="Card cap "
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">Bruchetta</h5>
                  <p>$12.99</p>
                </div>
                <p className="card-text">
                  Our Bruchetta is made from grilled bread that has been smeared
                  with garlic and seasoned with salt and olive oil. Special
                  orders apply
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
                alt="Card cap "
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">Lemon Dessert</h5>
                  <p>$12.99</p>
                </div>
                <p className="card-text">
                  This comes straight from grandma's recipe book, every last
                  ingredient has been sourced and is as authentic as can be
                  imagined.
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
  );
}

export default Specials;
