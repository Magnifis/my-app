import React from "react";
import tec from "./Header.module.css";
const Header = () => {
  return (
    <header className={tec.header}>
      <img
        className={tec.image}
        src="https://avatars.mds.yandex.net/i?id=c078f06e7ebc2453a76244a5726820f5b83d6b90-9066077-images-thumbs&n=13"
      ></img>
    </header>
  );
};

export default Header;
