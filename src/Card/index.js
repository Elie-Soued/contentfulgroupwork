import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";
import "../BigCard/styles.css";
import BigCard from "../BigCard";
import Info from "./Info";
import User from "./User";

export default function Card({
  title,
  description,
  userInfo,
  rating,
  imageurl,
  username,
  email,
  profilepic,
}) {
  const [enlarge, setEnlarge] = useState();
  const [info, setInfo] = useState();
  const [user, setUser] = useState();
  const [btnActive, setBtnActive] = useState("navBttn");

  const picEnlargement = () => {
    enlarge ? setEnlarge(false) : setEnlarge(true);
    setInfo(false);
    setUser(false);
  };
  const showInfo = () => {
    if (!info) {
      setInfo(true);
      setBtnActive("navBttnActive");
      setUser(false);
    } else {
      setInfo(false);
      setBtnActive("navBttn");
    }
  };
  const showUser = () => {
    if (!user) {
      setUser(true);
      setInfo(false);
    } else {
      setUser(false);
    }
  };

  return !enlarge ? (
    <div className="card">
      <div className="image">
        <img src={imageurl} />
      </div>

      <div className="details">
        <span className="favorite">
          <i class="fa fa-star fa-2x" aria-hidden="true"></i>
        </span>
        <div className="center">
          <h1>{title}</h1>
          <p>{description}</p>
          <ul>
            <li>
              <span>by: {username}</span>
            </li>
            <li>
              <span>Rating: {rating}</span>
            </li>
          </ul>
        </div>
        <div className="plus">
          <i
            class="fa fa-expand fa-2x"
            aria-hidden="true"
            onClick={() => picEnlargement()}
          ></i>
        </div>
      </div>
    </div>
  ) : (
    //bigger Card
    <div className="bigCard">
      <div className="bigimage">
        <img src={imageurl} />
      </div>
      <div className="nav">
        <nav className="navBar">
          <button
            className="navBttn"
            activeClassName="navBttnActive"
            onClick={() => showInfo()}
          >
            <i class="fa fa-info"></i>
          </button>
          <button
            className="navBttn"
            activeClassName="navBttnActive"
            onClick={() => showUser()}
          >
            <i class="fa fa-user"></i>
          </button>
          <button
            className="navBttn"
            activeClassName="navBttnActive"
            to="/info"
          >
            <i class="fa fa-share-alt"></i>
          </button>
          <button
            className="navBttn"
            activeClassName="navBttnActive"
            to="/info"
          >
            <i class="fa fa-thumbs-up"></i>
          </button>
          <button className="navBttn" onClick={() => picEnlargement()}>
            <i class="fa fa-close"></i>
          </button>
        </nav>
      </div>
      {info ? (
        <Info title={title} description={description} rating={rating} />
      ) : (
        <></>
      )}
      {user ? <User /> : <></>}
    </div>
  );
}
