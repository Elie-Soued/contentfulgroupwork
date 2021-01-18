import React from "react";
import "./styles.css";

export default function User() {
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
            <td>UserProfilePic</td>
          </tr>
          <tr>
            <td>UserName</td>
            <td>"UserName"</td>
          </tr>
          <tr>
            <td>E-Mail</td>
            <td>E-Mail-Adress of User</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
