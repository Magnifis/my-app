const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  messages: [
    { message: "Who are you?", id: 1 },
    { message: "I am Justin Biber", id: 2 },
    { message: "What is Homuk", id: 3 },
    { message: "Recryter Dapi?", id: 4 },
    { message: "Заепутало опять", id: 5 },
  ],
  dialogs: [
    { name: "Dima", id: 1 },
    { name: "Mixa", id: 2 },
    { name: "Lika", id: 3 },
    { name: "Oleks", id: 4 },
    { name: "Aglaya", id: 5 },
  ],
  newMessageBody: "",
}
export const dialogsReducer = (state = initialState, action) => {


  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody:action.body
      }
      
    
    case SEND_MESSAGE:
      let body = state.newMessageBody;

      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages,{ id: 6, message: body } ]
      };
       
    default:
      return state;
  }
};
export const sendMesageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
