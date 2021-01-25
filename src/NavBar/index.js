import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
//import "./views/styles.css";

export default function NavBar() {
  return (
    <div>
      <h1>Super Pinterest Clone</h1>
      <nav className="nav">
        <NavLink className="button" activeClassName="buttonActive" to="/">
          <i class="fa fa-home fa-2x"></i>
        </NavLink>

        <NavLink
          className="button"
          activeClassName="buttonActive"
          to="/allposts"
        >
          All
        </NavLink>
        <NavLink
          className="button"
          activeClassName="buttonActive"
          to="/topfiveposts"
        >
          TOP 5
        </NavLink>
      </nav>
    </div>
  );
}
