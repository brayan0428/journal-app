import React from "react";
import { EntryItem } from "./EntryItem";

export const EntriesList = () => {
  const entries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <div className="sidebar__entries-list">
      {entries.map((entry) => (
        <EntryItem key={entry} />
      ))}
    </div>
  );
};
