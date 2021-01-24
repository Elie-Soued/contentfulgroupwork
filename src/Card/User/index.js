import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function User({ userid }) {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/8fv8p8zq5nhk/environments/master/entries?access_token=2Kxs5ywkZC4G2_BlVcVViNwuADQfYgS90gfRRS85QUY&content_type=user&sys.id[match]=${userid}`
      )
      .then((response) => {
        setUserInfo(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
              {userInfo.map((iteration, index) => {
                return (
                  <img key={index} src={iteration.fields.profilePicture} />
                );
              })}
            </td>
          </tr>
          <tr>
            {userInfo.map((iteration, index) => {
              return <td key={index}>{iteration.fields.username}</td>;
            })}
          </tr>
          <tr>
            {userInfo.map((iteration, index) => {
              return <td key={index}>{iteration.fields.email}</td>;
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
