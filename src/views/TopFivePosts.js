import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Card from "../Card";
import axios from "axios";
import "./styles.css";

export default function TopFivePosts() {
  let [topRatedPictures, setTopRatedPictures] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://cdn.contentful.com/spaces/8fv8p8zq5nhk/environments/master/entries?access_token=2Kxs5ywkZC4G2_BlVcVViNwuADQfYgS90gfRRS85QUY&content_type=post&fields.rating=5"
      )
      .then((response) => {
        console.log(response.data.items);

        setTopRatedPictures(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="mainContent">
      {topRatedPictures.map((image, index) => {
        return (
          <div key={index}>
            <Card imageurl={image.fields.imageurl} />
          </div>
        );
      })}
    </div>
  );
}
