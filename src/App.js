import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import React, {useEffect, useState} from 'react';
import AllPosts from "./views/AllPosts.js";
import RatingPosts from "./views/RatingPosts.js";
import LandingPage from "./views/LandingPage.js";

function App() {




  return (
    <div className='App wrapper'>









      <Switch>
        <Route path='/allposts'>
          <AllPosts />
        </Route>
        <Route path='/ratingposts'>
          <RatingPosts />
        </Route>
        <Route path='/'>
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
