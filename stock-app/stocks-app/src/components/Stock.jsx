import React from "react";
import { Link } from "react-router-dom";
import stocks from "../models/data";

function Stock() {
 
    {
      stocks.map((stx, key) => {
        const { name, symbol, lastPrice, change } = stx;
        return (
          <Link to={`/stocks/${symbol}`} key={key}>
            <div className="stkBox">
              <div>{name}</div>
              <div>{lastPrice}</div>
              <div>{change}</div>
            </div>
          </Link>
        );
      });
    }
  };

export default Stock;
