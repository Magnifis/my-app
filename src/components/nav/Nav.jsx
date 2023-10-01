import React from "react";
import tec from "./Nav.module.css";
import { NavLink } from "react-router-dom";
const Nav = (props) => {
  // debugger;
  return (
    <nav className={tec.nav}>
      <div className={tec.item}>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? tec.activeLink : undefined)}
        >
          Profile
        </NavLink>
      </div>
      <div className={tec.item}>
        <NavLink
          to="/dialogs"
          className={({ isActive }) => (isActive ? tec.activeLink : undefined)}
        >
          Messages
        </NavLink>
      </div>
      <div className={tec.item}>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? tec.activeLink : undefined)}
        >
          News
        </NavLink>
      </div>
      <div className={tec.item}>
        <NavLink
          to="/music"
          className={({ isActive }) => (isActive ? tec.activeLink : undefined)}
        >
          Music
        </NavLink>
      </div>
      <div className={tec.item}>
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? tec.activeLink : undefined)}
        >
          Users
        </NavLink>
      </div>
      <div className={tec.item}>
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? tec.activeLink : undefined)}
        >
          Settings
        </NavLink>
      </div>
      <div className={tec.friends}>
        <NavLink
          to="/friends"
          className={({ isActive }) => (isActive ? tec.activeLink : undefined)}
        >
          Friends
        </NavLink>
      </div>
      
      <div className={tec.navi}>
        {props.friends.map((e) => {
          return (
            <div className={tec.navi} key={e.id}>
              <div>
                <div>
                  <img src={e.foto} alt="#" className={tec.img} />
                </div>
                <div>{e.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
