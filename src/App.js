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
          <h1>Super Pinterest Clone</h1>
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
          <Route path="/">
            <div className="landing">
              <img
                class="landingImg"
                src="https://pbs.twimg.com/profile_images/1104343124762132480/CP8KGorb.jpg"
                alt="aria"
              ></img>
              <p>You have been blessed by the rare french Gopnik</p>
            </div>
          </Route>
        </Switch>
      </div>
      <footer>Weekly Project made for WBS Coding School</footer>
    </div>
  );
}

export default App;
