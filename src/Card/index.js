import React, { useState } from "react";
import "./styles.css";
import BigCard from "../BigCard";

export default function Card({ url }) {
  const [enlarge, setEnlarge] = useState();
  const picEnlargement = () => {
    enlarge ? setEnlarge(false) : setEnlarge(true);
  };

  return !enlarge ? (
    <div className="card">
      <div className="image">
        <img src={url} />
      </div>
      <div className="details">
        <span className="favorite">
          <i class="fa fa-star fa-2x" aria-hidden="true"></i>
        </span>
        <div className="center">
          <h1>Title</h1>
          <p>
            Description Lorem ipsum is simple dummy text on the printing and
            typesetting industry.
          </p>
          <ul>
            <li>
              <span>by: username</span>
            </li>
            <li>
              <span>Rating: 5</span>
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
    <BigCard url={url} />
  );
}
