import React from "react";
import tec from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPosts container";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={tec.content}>
      <ProfileInfo />
      <MyPostsContainer
        store={props.store}
      />
    </div>
  );
};

export default Profile;
