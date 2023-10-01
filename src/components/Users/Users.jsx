import React from "react";
import style from "./Users.module.css";
import axios from "axios";
import Ava from "../Ava.jpg";

class Users extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUser(response.data.items);
      });
  }

  render() {
    return (
      <div>
        {this.props.state.map((u) => (
          <div key={u.id}>
            <div>
              <img
                src={u.photos.small ? u.photos.small : Ava}
                alt="#"
                className={style.userPhoto}
              />
            </div>
            <div>
              {u.followed ? (
                <button onClick={() => this.props.unFollow(u.id)}>
                  Unfollow
                </button>
              ) : (
                <button onClick={() => this.props.follow(u.id)}>Follow</button>
              )}
            </div>

            <div>{u.name}</div>
            <div>{u.status}</div>

            <div>{"u.location.country"}</div>
            <div>{"u.location.city"} </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Users;
