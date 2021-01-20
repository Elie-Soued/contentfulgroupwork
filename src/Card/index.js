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
  userid,
  rating,
  imageurl,
  username,
  email,
  profilepic,
}) {
  const [enlarge, setEnlarge] = useState();
  const [info, setInfo] = useState();
  const [user, setUser] = useState();
  const [btnActive, setBtnActive] = useState("bignavBttn");

  const picEnlargement = () => {
    enlarge ? setEnlarge(false) : setEnlarge(true);
    setInfo(false);
    setUser(false);
  };
  const showInfo = () => {
    if (!info) {
      setInfo(true);
      setBtnActive("bignavBttnActive");
      setUser(false);
    } else {
      setInfo(false);
      setBtnActive("bignavBttn");
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
      <div className="bignav">
        <nav className="bignavBar">
          <button
            className="bignavBttn"
            activeClassName="bignavBttnActive"
            onClick={() => showInfo()}
          >
            <i class="fa fa-info"></i>
          </button>
          <button
            className="bignavBttn"
            activeClassName="bignavBttnActive"
            onClick={() => showUser()}
          >
            <i class="fa fa-user"></i>
          </button>

          <button className="bignavBttn" onClick={() => picEnlargement()}>
            <i class="fa fa-close"></i>
          </button>
        </nav>
      </div>
      {info ? (
        <Info title={title} description={description} rating={rating} />
      ) : (
        <></>
      )}
      {user ? <User userid={userid} /> : <></>}
    </div>
  );
}
