import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function TrendingItem(props) {
  return (
    <div className="col-6 col-md-3 p-2">
      <div className="productList border rounded-top">
        <img
          src={props.item.imgSrc}
          alt="product image"
          className="w-100 rounded-top"
        />
        <div className="pr-det text-center">
          <div className="logoBox">
            <img src={props.item.logoImgSrc} />
          </div>
          <div className="text-danger text-uppercase fw-700 py-2">
            {props.item.offOnItem}
          </div>
          <Link
            to="#"
            className="btn btn-danger btn-block fs-14 py-1 rounded-0"
          >
            {props.item.linkText}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TrendingItem;
