import React, { useState, useContext } from "react";  // Added useContext
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";  // Importing context

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { closeBuyWindow } = useContext(GeneralContext); // Properly consuming context

  const handleBuyClick = () => {
    axios.post(
      "http://localhost:3002/newOrder", 
      
      // 2nd Argument: DATA (Body)
      {
        name: uid, // Make sure ye Stock ka naam hai (e.g., "TCS"), User ID nahi.
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      },
      
      // 3rd Argument: CONFIG (Cookie Settings)
      {
        withCredentials: true 
      }
    )
    .then((res) => {
        console.log(res);
        // Toast success message laga sakti ho yahan
    })
    .catch((err) => {
        console.log(err);
    });

    closeBuyWindow();  // Using closeBuyWindow from context
};

 

  const handleCancelClick = () => {
    closeBuyWindow();  // Using closeBuyWindow from context
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;