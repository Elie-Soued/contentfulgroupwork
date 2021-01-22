import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function User({ username, email, profilePicture }) {
  return (
    <div className="info">
      <table>
        <thead>
          <tr>
            <th>User Info</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="profilePic">
              <img src={profilePicture} alt={""} />
            </td>
          </tr>
          <tr>
            <td>{username}</td>
          </tr>
          <tr>
            <td>{email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
