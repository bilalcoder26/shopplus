import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavMenu() {
  return (
    <Router>
      <div className="off-canvas-nav">
        <div className="left-nav-toplink">
          <div className="left-nav">
            <ul className="list-unstyled m-0">
              <li>
                <Link to="index.html">Home</Link>
              </li>
              <li>
                <Link to="#">New Arrivals</Link>
              </li>
              <li className="show-mobile parent">
                <Link to="#" data-related="title_1">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="#">Discounts</Link>
              </li>
              <li>
                <Link to="#">Bogo</Link>
              </li>
              <li>
                <Link to="#">Check My Voucher Status</Link>
              </li>
              <li>
                <Link to="#">Resend My Voucher</Link>
              </li>
              <li>
                <Link to="#">My Transactions</Link>
              </li>
              <li>
                <Link to="#">Customer Care</Link>
              </li>
            </ul>
            <div className="subMenu" id="categories">
              <div className="text-right nav-back">
                <span>Categories</span>
              </div>
              <ul className="list-unstyled m-0">
                <li>
                  <Link to="category.html">Apparel & Accessories</Link>
                </li>
                <li>
                  <Link to="category.html">Food & Beverage</Link>
                </li>
                <li>
                  <Link to="category.html">Grocery & Home Needs</Link>
                </li>
                <li>
                  <Link to="category.html">Mobile & Electronics</Link>
                </li>
                <li>
                  <Link to="category.html">Health & Wellness</Link>
                </li>
                <li>
                  <Link to="category.html">e-Com & Online</Link>
                </li>
                <li>
                  <Link to="category.html">Entertainment & Magazines</Link>
                </li>
                <li>
                  <Link to="category.html">Cabs & Travel</Link>
                </li>
                <li>
                  <Link to="category.html">All Brands</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default NavMenu;
