import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function User({userid}) {

  let [users, setUsers] = useState([]);

  console.log(userid);

  useEffect(() => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/8fv8p8zq5nhk/environments/master/entries?access_token=2Kxs5ywkZC4G2_BlVcVViNwuADQfYgS90gfRRS85QUY&content_type=user&sys.id[match]=${userid}`
      )
      .then((response) => {
        setUsers(response.data.items);
        console.log(users);
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
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>UserProfilePic</td>
            {users.map((user) => {
              return (
                <td key={user.id}><img src={user.fields.profilePicture} alt={''} /></td>
              )
            })}
          </tr>
          <tr>
            <td>UserName</td>
            {users.map((user) => {
              return (
                <td key={user.id}>{user.fields.username}</td>
              )
            })}
          </tr>
          <tr>

            <td>E-Mail</td>

               {users.map((user) => {
              return (
                <td key={user.id}>{user.fields.email}</td>

              )
            })}




          </tr>
        </tbody>
      </table>
    </div>
  );
}
