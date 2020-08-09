import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavItem(props) {
  return (
    <Router>
      <li class="dropdown spriteMenu">
        <Link
          to="#"
          class="dropdown-toggle"
          id="apparel-accessories-Dropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <figure>
            <img src={props.item.icon_url} alt={props.item.name} />
            <figcaption>{props.item.name}</figcaption>
          </figure>
        </Link>

        <div
          class="dropdown-menu"
          aria-labelledby="apparel-accessories-Dropdown"
        >
          {props.dropMenu.map((elem) => (
            <Link class="dropdown-item" to="#">
              {elem}
            </Link>
          ))}
        </div>
      </li>
    </Router>
  );
}

export default NavItem;
