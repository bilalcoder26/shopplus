import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function SmallItem(props) {
  return (
    <div className="col-6 col-md-4 col-lg-2 p-2 text-center">
      <div className="border">
        <figure className="m-0">
          <img src={props.item.imgSrc} />
          <figcaption className="m-0 mt-3 p-3 border-top">
            <div className="offDiv">{props.item.offOnItem}</div>
            <div>
              <Link to="brand.html" className="btn btn-danger fs-14 rounded-0">
                {props.item.linkText}
              </Link>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default SmallItem;
