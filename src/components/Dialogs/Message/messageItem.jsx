import React from "react";
import tec from "./../dialogs.module.css";


const Message = (props) => {
  return <div className={tec.message}>{props.message}</div>;
};



export default Message;
