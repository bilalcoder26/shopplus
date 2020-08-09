import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SmallItem from "./smallItem/smallItem";

function SmallItems() {
  let data = [
    {
      offOnItem: "Upto 5% off",
      linkText: "SHOP NOW",
      imgSrc: "images/logos/1.png",
    },
    {
      offOnItem: "Upto 5% off",
      linkText: "SHOP NOW",
      imgSrc: "images/logos/2.png",
    },
    {
      offOnItem: "Upto 5% off",
      linkText: "SHOP NOW",
      imgSrc: "images/logos/3.png",
    },
    {
      offOnItem: "Upto 5% off",
      linkText: "SHOP NOW",
      imgSrc: "images/logos/4.png",
    },
    {
      offOnItem: "Upto 5% off",
      linkText: "SHOP NOW",
      imgSrc: "images/logos/5.png",
    },
    {
      offOnItem: "Upto 5% off",
      linkText: "SHOP NOW",
      imgSrc: "images/logos/6.png",
    },
  ];

  return (
    <Router>
      <section className="row py-3 py-md-4">
        <div className="col-12 p-0">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="h4 fw-700 text-uppercase">
                  best selling brands
                </h3>
              </div>

              <div className="col-12 px-4">
                <div className="row destSealingGread">
                  {data.map((element) => (
                    <SmallItem item={element} />
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

export default SmallItems;
