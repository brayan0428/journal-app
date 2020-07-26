import React from "react";
import { Sidebar } from "../components/Sidebar";
import { NothingSelected } from "../components/NothingSelected";
import { Note } from "../components/Note";
import { useSelector } from "react-redux";

export const Journal = () => {
  const {active} = useSelector(state => state.notes)

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      {
        active ? <Note /> : <NothingSelected />
      }
    </div>
  );
}
