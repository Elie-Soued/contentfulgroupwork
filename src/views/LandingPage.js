import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './styles.css';

export default function LandingPage() {
  return (

    <div className="container">
        <div className="containerItem sideBar">
            <div className="allPostsDiv ">
                <Link className="button" to="/allposts">Get all Posts</Link>
            </div>
            <div className="ratingsDiv ">
                <Link className="button" to="/ratingposts">Get Rankings</Link>
            </div>

        </div>
        <div className="containerItem mainContent">Main Content</div>
    </div>
  );
}
