import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TrendingItem from "./trandingitem/trendingItem";

function TrendingItems() {
  let data = [
    {
      offOnItem: "SAVE UPTO 10%",
      linkText: "SHOP NOW",
      imgSrc: "images/1.jpg",
      logoImgSrc: "images/logos/7.png",
    },
    {
      offOnItem: "SAVE UPTO 10%",
      linkText: "SHOP NOW",
      imgSrc: "images/2.jpg",
      logoImgSrc: "images/logos/8.png",
    },
    {
      offOnItem: "SAVE UPTO 10%",
      linkText: "SHOP NOW",
      imgSrc: "images/3.jpg",
      logoImgSrc: "images/logos/9.png",
    },
    {
      offOnItem: "SAVE UPTO 10%",
      linkText: "SHOP NOW",
      imgSrc: "images/4.jpg",
      logoImgSrc: "images/logos/10.png",
    },
  ];
  return (
    <Router>
      <section className="row py-3 py-md-4">
        <div className="col-12 p-0">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="h4 fw-700 text-uppercase">TRENDING CATEGORY</h3>
              </div>

              <div className="col-12 px-4">
                <div className="row">
                  {data.map((element) => (
                    <TrendingItem item={element} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Router>
  );
}

export default TrendingItems;
