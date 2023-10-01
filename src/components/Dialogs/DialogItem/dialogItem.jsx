import React from "react";
import tec from "./../dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={tec.dialog}>
      <img className ={tec.img} src="https://assets.faceit-cdn.net/avatars/80664ec1-a6ec-4473-98a2-ea0c55f952e6_1613496158025.jpg" alt="#" /> 
      <NavLink className={tec.nam} to={"/dialog/" + props.id}>{props.name}</NavLink>
    </div>
  );
};


export default DialogItem