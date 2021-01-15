import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import axios from "axios";

function App() {
  return (
    <div className='App wrapper'>
      <div className='sideBar wrapperItem'>
        <div className='divLinkAllPost'>
          <Link className="toBecomeButton" to='/allposts'>All Post Links</Link>{" "}
        </div>
        <div className='divLinkRating'>
          {" "}
          <Link className="toBecomeButton" to='/bestratedposts'>All Post Links</Link>
        </div>
      </div>
      <div className='mainContent wrapperItem'>
        <h1>Welcome to Main Content</h1>
      </div>
    </div>
  );
}

export default App;
