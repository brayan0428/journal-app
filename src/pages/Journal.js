import React from "react";
import { Sidebar } from "../components/Sidebar";
//import { NothingSelected } from "../components/NothingSelected";
import { Note } from "../components/Note";

export const Journal = () => (
  <div style={{ display: "flex" }}>
    <Sidebar />
    <Note />
  </div>
);
