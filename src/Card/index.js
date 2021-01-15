import React, { useState } from "react";
import "./styles.css";

export default function Card({url}) {



  return (
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
          <i class="fa fa-arrow-circle-o-right fa-3x" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    //bigger Card
  );
}
