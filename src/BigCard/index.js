import React, { useState } from "react";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import "./styles.css";

export default function BigCard({ url, enlarge, setEnlarge }) {
  const smallPic = () => {
    enlarge ? setEnlarge(false) : setEnlarge(true);
  };
  return (
    <div className="bigCard">
      <div className="bigimage">
        <img src="https://picsum.photos/2100/1900" />
      </div>
      <div className="nav">
        <nav className="navBar">
          <NavLink
            className="navBttnActive"
            activeClassName="navBttnActive"
            to="/info"
          >
            <i class="fa fa-info"></i>
          </NavLink>
          <NavLink
            className="navBttn"
            activeClassName="navBttnActive"
            to="/info"
          >
            <i class="fa fa-comments"></i>
          </NavLink>
          <NavLink
            className="navBttn"
            activeClassName="navBttnActive"
            to="/info"
          >
            <i class="fa fa-share-alt"></i>
          </NavLink>
          <NavLink
            className="navBttn"
            activeClassName="navBttnActive"
            to="/info"
          >
            <i class="fa fa-thumbs-up"></i>
          </NavLink>
          <NavLink
            className="navBttn"
            activeClassName="navBttnActive"
            to="/info"
          >
            <i class="fa fa-close"></i>
          </NavLink>
        </nav>
      </div>
    </div>

    //bigger Card
  );
}
