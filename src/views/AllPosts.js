import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card";

export default function AllPosts() {
  let [pictures, setPictures] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://cdn.contentful.com/spaces/8fv8p8zq5nhk/environments/master/entries?access_token=2Kxs5ywkZC4G2_BlVcVViNwuADQfYgS90gfRRS85QUY&content_type=post"
      )
      .then((response) => {
        console.log(response.data.items);
        setPictures(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="mainContent">
      {pictures.map((iteration, index) => {
        console.log(iteration.fields);
        return (
          <div key={index}>
            <Card
              title={iteration.fields.title}
              description={iteration.fields.description}
              rating={iteration.fields.rating}
              imageurl={iteration.fields.imageurl}
              userid={iteration.fields.user.sys.id}
            />
          </div>
        );
      })}
    </div>
  );
}
