import React from "react";
import tec from "./../dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={tec.dialog}>
      <img className ={tec.img} src="https://coop-land.ru/uploads/posts/2023-02/1677331876_4.jpg" alt="#" /> 
      <NavLink className={tec.nam} to={"/dialog/" + props.id}>{props.name}</NavLink>
    </div>
  );
};


export default DialogItem