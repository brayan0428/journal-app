import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote } from "../actions/notes";

export const NoteAppBar = () => {
  const dispatch = useDispatch()
  const {active} = useSelector(state => state.notes)
  
  const handleSaveEntry = () => {
    dispatch(startSaveNote(active.id, active))  
  }

  return (
    <div className="note__appbar">
      <span>28 de Agosto de 2020</span>
      <div>
        <button className="btn">Picture</button>
        <button className="btn" onClick={handleSaveEntry}>Save</button>
      </div>
    </div>
  );
};
