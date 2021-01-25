import { Route, NavLink, Switch } from "react-router-dom";
import React from "react";
import AllPosts from "./views/AllPosts.js";
import TopFivePosts from "./views/TopFivePosts.js";
import NavBar from "./NavBar";
import "./views/styles.css";
// import LandingPage from "./views/LandingPage.js";

function App() {
  return (
    <div className="">
      <NavBar />

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
            </div>
          </Route>
        </Switch>
      </div>
      <footer>Weekly Project made for WBS Coding School</footer>
    </div>
  );
}

export default App;
