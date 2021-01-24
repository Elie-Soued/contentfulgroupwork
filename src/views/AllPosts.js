import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card";

export default function AllPosts() {
  let [pictures, setPictures] = useState([]);
  let [query, setQuery] = useState();
  let [pictureSearch, setPictureSearch] = useState(false);
  let [resultSearch, setResultSearch] = useState([]);

  useEffect(async () => {
    await axios
      .get(
        "https://cdn.contentful.com/spaces/8fv8p8zq5nhk/environments/master/entries?access_token=2Kxs5ywkZC4G2_BlVcVViNwuADQfYgS90gfRRS85QUY&content_type=post"
      )
      .then((response) => {
        setPictures(response.data.items);
        console.log(response.data);
        setPictureSearch(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const search = () => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/8fv8p8zq5nhk/environments/master/entries?access_token=2Kxs5ywkZC4G2_BlVcVViNwuADQfYgS90gfRRS85QUY&content_type=post&fields.title[match]=${query}`
      )
      .then((response) => {
        console.log(response.data.items);
        setResultSearch(response.data.items);
        console.log(resultSearch);
        setPictureSearch(true);
        console.log(pictureSearch);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" onClick={() => search()}>
          Search
        </button>
        {pictureSearch ? (
          <button onClick={() => setPictureSearch(false)}>Go Back</button>
        ) : (
          <></>
        )}
      </div>

      <div className="mainContent">
        {!pictureSearch
          ? pictures.map((iteration, index) => {
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
            })
          : resultSearch.map((iteration, index) => {
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
    </div>
  );
}
