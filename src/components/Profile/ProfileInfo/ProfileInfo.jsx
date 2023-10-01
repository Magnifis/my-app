import React from "react";
import tec from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <img src="https://img.fonwall.ru/o/68/kosmos-planety-vselennaya-lbzu.jpg?route=thumb&h=350"></img>
      <div className={tec.profile}>
        <img
          className={tec.avatar}
          src="https://webpulse.imgsmail.ru/imgpreview?mb=webpulse&key=pulse_cabinet-image-785ba347-ee1b-4890-bea0-907913cc0345"
        />
        <div>Mister Vijn</div>
        <ul>
          <li>Date of Birth: 2 january</li>
          <li>City: Vacanda</li>
          <li> Web site: hren znaet</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileInfo;
