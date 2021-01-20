import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Card from "../Card";

export default function RatingPosts() {
  return (
    <div className='container'>

      <div className='containerItem mainContent'>
        <h1>Ratings Content</h1>
            <Card />
      </div>
    </div>
  );
}
