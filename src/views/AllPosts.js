import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

export default function AllPosts () {
    return (
        <div className='container'>
      <div className='containerItem sideBar'>
        <div className='buttonsDivSidebar'>
          <Link className='button' to='/'>
            Get me Home
          </Link>
        </div>
        <div className='buttonsDivSidebar'>
          <Link className='button' to='/ratingposts'>
            Get me Ratings
          </Link>
        </div>
      </div>
      <div className='containerItem mainContent'>
        <h1>Posts Content</h1>
      </div>
    </div>
    )
}