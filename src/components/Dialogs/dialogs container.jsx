import {
  sendMesageCreator,
  updateNewMessageBodyCreator,
} from "../redux/dialogs-reducer copy";
import Dialogs from "./dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {

  return {
    dialogsPage: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },

    sendMessage: () => {
      dispatch(sendMesageCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
