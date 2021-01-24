import React, { useEffect, useState } from "react";
import "./styles.css";
import "./bigstyles.css";
import Info from "./Info";
import User from "./User";
import StarRatings from "react-star-ratings";
import axios from "axios";

export default function Card({
  title,
  description,
  userid,
  rating,
  imageurl,
  users,
  setUsers,
  username,
  email,
  profilePicture,
}) {
  const [enlarge, setEnlarge] = useState();
  const [info, setInfo] = useState();
  const [user, setUser] = useState();
  const [userInfo, setUserInfo] = useState([]);
  const [btnActive, setBtnActive] = useState("bignavBttn");
  useEffect(() => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/8fv8p8zq5nhk/environments/master/entries?access_token=2Kxs5ywkZC4G2_BlVcVViNwuADQfYgS90gfRRS85QUY&content_type=user&sys.id[match]=${userid}`
      )
      .then((response) => {
        setUserInfo(response.data.items);
        console.log(userInfo);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
        <div className="center">
          <h1>{title}</h1>
          <p>{description}</p>

          <StarRatings
            rating={rating}
            starRatedColor="gold"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="0px"
          />
        </div>
        <div className="plus">
          <i
            className="fa fa-expand fa-2x"
            aria-hidden="true"
            onClick={() => {
              picEnlargement();
            }}
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
            <i className="fa fa-info"></i>
          </button>
          <button
            className="bignavBttn"
            activeClassName="bignavBttnActive"
            onClick={() => showUser()}
          >
            <i className="fa fa-user"></i>
          </button>

          <button className="bignavBttn close" onClick={() => picEnlargement()}>
            <i className="fa fa-close"></i>
          </button>
        </nav>
      </div>
      {info ? (
        <Info title={title} description={description} rating={rating} />
      ) : null}
      {user ? <User userid={userid} /> : null}
    </div>
  );
}
