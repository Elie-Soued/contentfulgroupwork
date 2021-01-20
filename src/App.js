import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AllPosts from "./views/AllPosts.js";
import TopFivePosts from "./views/TopFivePosts.js";
import "./views/styles.css";
// import LandingPage from "./views/LandingPage.js";

function App() {
  return (
    <div className="">
      <header>
        <nav>
          <NavLink
            className="button"
            activeClassName="buttonActive"
            to="/topfiveposts"
          >
            Get me Ratings
          </NavLink>
          <NavLink
            className="button"
            activeClassName="buttonActive"
            to="/allposts"
          >
            Get all posts
          </NavLink>
          <NavLink className="button" to="/">
            <i class="fa fa-home fa-2x"></i>
          </NavLink>
        </nav>
      </header>
      <div className="container">
        <Switch>
          <Route path="/allposts">
            <AllPosts />
          </Route>
          <Route path="/topfiveposts">
            <TopFivePosts />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
