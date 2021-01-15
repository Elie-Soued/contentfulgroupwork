import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

export default function RatingPosts() {
  return (
    <div className='container'>
      <div className='containerItem sideBar'>
        <div className='buttonsDivSidebar'>
          <Link className='button' to='/'>
            Get me Home
          </Link>
        </div>
        <div className='buttonsDivSidebar'>
          <Link className='button' to='/allposts'>
            Get me all Posts
          </Link>
        </div>
      </div>
      <div className='containerItem mainContent'>
        <h1>Ratings Content</h1>
      </div>
    </div>
  );
}
