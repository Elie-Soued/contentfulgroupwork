import React from "react";
import "./styles.css";
import StarRatings from "react-star-ratings";

export default function Info({ title, description, rating }) {
  return (
    <div className="info">
      <table>
        <thead>
          <tr>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Title</td>
            <td>{title}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>{description}</td>
          </tr>
          <tr>
            <td>Rating</td>
            <td>
              <StarRatings
                rating={rating}
                starRatedColor="gold"
                numberOfStars={5}
                starDimension="30px"
                starSpacing="0px"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
