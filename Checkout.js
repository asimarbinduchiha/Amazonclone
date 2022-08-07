import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://www.jerrysartarama.com/images/art-supplies/Amazon-pay-banner-2019.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your ShoppingBasket</h2>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
