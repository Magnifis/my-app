import React from "react";
import tec from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={tec.item}>
      <img
        src="https://images.hdqwalls.com/download/tony-stark-paint-art-tk-3000x2400.jpg"
        alt="#"
      />
      {props.message}
      <div>
        <span>like {props.count}</span>
      </div>
    </div>
  );
};

export default Post;
