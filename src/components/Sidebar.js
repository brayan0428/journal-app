import React from "react";
import { EntriesList } from "./EntriesList";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../actions/auth";
import { addNewNote } from "../actions/notes";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const {name} = useSelector(state => state.auth)

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleNewEntry = () => {
    dispatch(addNewNote())
  }
  return (
    <div className="sidebar__main">
      <div className="sidebar__navbar mb-5">
        <h3>
          <i className="far fa-moon"></i> {name}
        </h3>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="sidebar__new-entry">
        <i className="far fa-calendar-alt fa-5x"></i>
        <button className="btn" onClick={handleNewEntry}>New entry</button>
      </div>
      <EntriesList />
    </div>
  );
};
