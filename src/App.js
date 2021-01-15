import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import axios from "axios";

import AllPosts from "./views/AllPosts.js";
import RatingPosts from "./views/RatingPosts.js";
import LandingPage from "./views/LandingPage.js";

function App() {
  return (
    <div className='App wrapper'>
      {/*skeleton api call get*/}
      {axios
        .get()
        .then(() => {})
        .catch(() => {})}
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
