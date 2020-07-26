import React from "react";
import { EntryItem } from "./EntryItem";
import { useSelector } from "react-redux";

export const EntriesList = () => {
  const {notes} = useSelector(state => state.notes)
  
  return (
    <div className="sidebar__entries-list">
      {notes.map((note) => (
        <EntryItem key={note.id} {...note} />
      ))}
    </div>
  );
};
