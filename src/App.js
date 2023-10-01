import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import NavContainer from "./components/nav/Nav container";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/news/news";
import Settings from "./components/Settings/settings";
import Music from "./components/Music/music";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/dialogs container";
import UsersContainer from "./components/Users/Users container";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavContainer  />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile  />} />
            <Route
              path="/dialogs"
              element={<DialogsContainer  />}
            />
            <Route path="/news" element={<News />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/music" element={<Music />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/users" element={<UsersContainer />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
