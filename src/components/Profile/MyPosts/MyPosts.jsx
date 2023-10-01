import React from "react";
import tec from "./MyPosts.module.css";
import Post from "./Post/Post";
// import { useRef } from "react";

const MyPosts = (props) => {
  let post = props.posts.map((el) => (
    <Post message={el.message} count={el.count} key={el.id} />
  ));

  let text = props.newPostText;

  let onAddPost = () => props.addPost();

  let onPostChange = (e) => {
    text = e.target.value;
    props.updateNewPostText(text);
  };
  return (
    
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            value={text}
            onChange={onPostChange}
            cols="30"
            rows="3"
          ></textarea>
        </div>
        <div>
          <button onClick={onAddPost}>Send</button>
        </div>
      </div>
      <div className={tec.posts}>{post}</div>
    </div>
  );
};

export default MyPosts;
