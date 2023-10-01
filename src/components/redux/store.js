// import { dialogsReducer } from "./dialogs-reducer copy";
// import { profileReducer } from "./profile-reducer";
// import { siteBarReducer } from "./siteBar-reducer ";
// let store = {
//   _state: {
//     dialogsPage: {
//       messages: [
//         { message: "Who are you?", id: 1 },
//         { message: "I am Justin Biber", id: 2 },
//         { message: "What is Homuk", id: 3 },
//         { message: "Recryter Dapi?", id: 4 },
//         { message: "Заепутало опять", id: 5 },
//       ],
//       dialogs: [
//         { name: "Dima", id: 1 },
//         { name: "Mixa", id: 2 },
//         { name: "Lika", id: 3 },
//         { name: "Oleks", id: 4 },
//         { name: "Aglaya", id: 5 },
//       ],
//       newMessageBody: "",
//     },
//     profilePage: {
//       posts: [
//         { message: "Hi, how are you", count: "23" },
//         { message: "i am fine,thanks", count: "12" },
//         { message: "Wouddfsefdsf dfs fdsf", count: "56" },
//       ],
//       newPostText: "",
//     },
//     siteBar: {
//       friends: [
//         {
//           id: 1,
//           name: "Igor",
//           foto: "https://tl.rulate.ru/i/book/23/5/3714.jpg",
//         },
//         {
//           id: 2,
//           name: "Bogdan",
//           foto: "https://tl.rulate.ru/i/book/23/5/3714.jpg",
//         },
//         {
//           id: 3,
//           name: "Literbol",
//           foto: "https://tl.rulate.ru/i/book/23/5/3714.jpg",
//         },
//       ],
//     },
//   },
//   getState() {
//     return this._state;
//   },
//   _callSubscriber() {},

//   _updateNewPostText(newText) {
//     this._state.profilePage.newPostText = newText;
//     // this._callSubscriber(this._state);
//   },
//   subscribe(observer) {
//     this._callSubscriber = observer;
//   },

//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//     this._state.siteBar = siteBarReducer(this._state.siteBarReducer, action);

//     this._callSubscriber(this._state);
//   },
// };

// // window.state = store;

// export default store;
