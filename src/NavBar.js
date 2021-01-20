import React from "react";
import { Link } from "react-router-dom";
import "./views/styles.css";
export default function NavBar() {
  return (
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
    </div>
  );
}
