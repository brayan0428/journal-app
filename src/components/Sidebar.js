import React from "react";
import { EntriesList } from "./EntriesList";

export const Sidebar = () => (
  <div className="sidebar__main">
    <div className="sidebar__navbar mb-5">
      <h3>
        <i className="far fa-moon"></i> Brayan
      </h3>
      <button className="btn">Logout</button>
    </div>
    <div className="sidebar__new-entry">
      <i className="far fa-calendar-alt fa-5x"></i>
      <button className="btn">New entry</button>
    </div>
    <EntriesList />
  </div>
);
