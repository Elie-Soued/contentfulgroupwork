import { Route, NavLink, Switch } from "react-router-dom";

import React from "react";
import AllPosts from "./views/AllPosts.js";
import TopFivePosts from "./views/TopFivePosts.js";
import "./views/styles.css";
// import LandingPage from "./views/LandingPage.js";

function App() {
  return (
    <div className="">
      <header>
        <nav className="nav">
          <NavLink className="button" to="/">
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
          <span>Super Pinterest Clone</span>
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
      <footer>
            Made by us
      </footer>
    </div>

  );
}

export default App;
