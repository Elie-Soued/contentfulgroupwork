import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './styles.css';

export default function LandingPage() {
  return (

    <div className="container">
        <div className="containerItem sideBar">
            <div className="buttonsDivSidebar ">
                <Link className="button" to="/allposts">Get all Posts</Link>
            </div>
            <div className="buttonsDivSidebar ">
                <Link className="button" to="/ratingposts">Get Rankings</Link>
            </div>

        </div>
        <div className="containerItem mainContent"><h1>Main Content</h1></div>
    </div>
  );
}
