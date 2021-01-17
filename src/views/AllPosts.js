import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card";

export default function AllPosts() {
  let [pictures, setPictures] = useState([]);

  let testArray = ["1", "2", "3"];

  useEffect(() => {
    axios
      .get(
        "https://cdn.contentful.com/spaces/8fv8p8zq5nhk/environments/master/entries?access_token=2Kxs5ywkZC4G2_BlVcVViNwuADQfYgS90gfRRS85QUY&content_type=post"
      )
      .then((response) => {
        const myArray = response.data.items;
        console.log(response.data.items);
        setPictures(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  {
    /*

useEffect(() => {
    const fetchAllPosts = async () => {
      const posts = await axios
        .get(
          "https://cdn.contentful.com/spaces/8fv8p8zq5nhk/environments/master/entries?access_token=2Kxs5ywkZC4G2_BlVcVViNwuADQfYgS90gfRRS85QUY&content_type=post"
        )
        .then((result) => result.data);
      return posts;
    };
    fetchAllPosts().then((res) => setPosts(res));
  }, []);

  console.log(posts);

*/
  }

  return (
    <div className="container">
      <div className="sideBar">
        <Link className="button" to="/">
          Get me Home
        </Link>

        <Link className="button" to="/ratingposts">
          Get me Ratings
        </Link>

        <Link className="button" to="/allposts">
          Get all posts
        </Link>
      </div>
      <div className="mainContent">
        {pictures.map((iteration, index) => {
          return (
            <div key={index}>
              {console.log(iteration)}
              <Card url={iteration.fields.imageurl} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
