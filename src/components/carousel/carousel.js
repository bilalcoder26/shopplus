import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Carousel() {
  return (
    <Router>
      <section className="row">
        <div className="col-12 p-0">
          <div
            id="carouselHome"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active carousel-item-left">
                <img
                  className="w-100 d-none d-md-block"
                  src="images/banner.jpg"
                  alt="First slide"
                />
                <img
                  className="w-100 d-block d-md-none "
                  src="images/mobile-banner.jpg"
                  alt="First slide"
                />
              </div>
              <div className="carousel-item carousel-item-next carousel-item-left">
                <img
                  className="w-100 d-none d-md-block"
                  src="images/banner.jpg"
                  alt="First slide"
                />
                <img
                  className="w-100 d-block d-md-none"
                  src="images/mobile-banner.jpg"
                  alt="First slide"
                />
              </div>
            </div>

            <Link
              className="carousel-control-prev"
              to="#carouselHome"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </Link>
            <Link
              className="carousel-control-next"
              to="#carouselHome"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </Link>
          </div>
        </div>
      </section>
    </Router>
  );
}

export default Carousel;
