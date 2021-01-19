import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="container">
      <div className="sideBar">
        <Link className="button" to="/">
          Get me Home
        </Link>

        <Link className="button" to="/ratingposts">
          Get me Ratings
        </Link>

        <Link className="button" to="/allposts">
          Get all posts
        </Link>
      </div>
    </div>
  );
}
