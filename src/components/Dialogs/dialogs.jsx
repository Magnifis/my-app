import React from "react";
import tec from "./dialogs.module.css";
import DialogItem from "./DialogItem/dialogItem";
import Message from "./Message/messageItem";

const Dialogs = (props) => {
  // debugger;
  let state = props.dialogsPage;

  let dialogsElement = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} />
  ));

  let messagesElement = state.messages.map((m) => (
    <Message message={m.message} key={m.id}/>
  ));
  let newMessageBody = props.dialogsPage.newMessageBody;

  let onSendMesageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={tec.dialogs}>
      <div className={tec.dialogsItem}>{dialogsElement}</div>
      <div className={tec.messages}>
        {" "}
        <div>{messagesElement}</div>
        <div>
          <div>
            <textarea
              onChange={(e) => {
                onNewMessageChange(e);
              }}
              value={newMessageBody}
              placeholder="write..."
              cols="20"
              rows="2"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMesageClick}> Send </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
