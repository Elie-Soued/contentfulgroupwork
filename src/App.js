import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
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
        {" "}
        <Link className="button" to="/topfiveposts">
          Get me Ratings
        </Link>
        <Link className="button" to="/allposts">
          Get all posts
        </Link>
        <Link className="button" to="/">
          Home
        </Link>
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
