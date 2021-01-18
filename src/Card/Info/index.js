import React from "react";
import "./styles.css";

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
            <td>UserProfilePic</td>
            <td>Username</td>
          </tr>
          <tr>
            <td>Rating</td>
            <td>{rating}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
