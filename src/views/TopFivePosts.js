import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Card from "../Card";
import axios from "axios";

export default function TopFivePosts() {
  let [topRatedPictures, setTopRatedPictures] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://cdn.contentful.com/spaces/8fv8p8zq5nhk/environments/master/entries?access_token=2Kxs5ywkZC4G2_BlVcVViNwuADQfYgS90gfRRS85QUY&content_type=post&fields.rating=5"
      )
      .then((response) => {
        console.log(response);

        setTopRatedPictures(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <div className="containerItem sideBar">
        <div className="buttonsDivSidebar">
          <Link className="button" to="/">
            Get me Home
          </Link>
        </div>
        <div className="buttonsDivSidebar">
          <Link className="button" to="/allposts">
            Get me all Posts
          </Link>
        </div>
        <div className="buttonsDivSidebar">
          <Link className="button" to="/ratingposts">
            Get me all Ratings
          </Link>
        </div>
      </div>
      <div className="containerItem mainContent">
        <h1>Ratings Content</h1>
        {topRatedPictures.map((image, index) => {
          <div key={index}>
            <Card imageurl={image.fields.imageurl} />
          </div>;
        })}
      </div>
    </div>
  );
}
