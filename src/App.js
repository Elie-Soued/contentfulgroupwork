import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AllPosts from "./views/AllPosts.js";
import TopFivePosts from "./views/TopFivePosts.js";
import LandingPage from "./views/LandingPage.js";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App wrapper">
      <Navbar />
      <Switch>
        <Route path="/allposts">
          <AllPosts />
        </Route>
        <Route path="/topfiveposts">
          <TopFivePosts />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
