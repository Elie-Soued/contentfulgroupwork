import React from "react";
import { NavLink } from "react-router-dom";
//import "./views/styles.css";
export default function NavBar() {
  return (
    <div>
      {/*
  <div className="container">
    <div className="containerItem sideBar">
      <div className="buttonsDivSidebar ">
        <Link className="button" to="/">
          Get me Home
        </Link>
      </div>

      <div className="buttonsDivSidebar ">
        <Link className="button" to="/topfiveposts">
          Get me Ratings
        </Link>
      </div>

      <div className="buttonsDivSidebar ">
        <Link className="button" to="/allposts">
          Get all posts
        </Link>
      </div>

      <div className="containerItem mainContent">
        <h1>Main Content</h1>
      </div>
    </div>


  */}

      <nav className="nav">
        <NavLink to="/">
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

        <h1>Super Pinterest Clone</h1>
      </nav>
    </div>
  );
}
