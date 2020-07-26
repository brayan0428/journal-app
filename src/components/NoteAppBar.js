import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, uploadPicture } from "../actions/notes";

export const NoteAppBar = () => {
  const dispatch = useDispatch()
  const {active} = useSelector(state => state.notes)
  
  const handleSaveEntry = () => {
    dispatch(startSaveNote(active.id, active))  
  }

  const handleClickPicture = () => {
    document.getElementById('inputFile').click()
  }

  const handleUploadPicture = (e) => {
    const file = e.target.files[0]
    if(file){
      dispatch(uploadPicture(file))
    }
  }


  return (
    <div className="note__appbar">
      <span>28 de Agosto de 2020</span>
      <div>
        <input type="file" id="inputFile" onChange={handleUploadPicture} style={{display: 'none'}}/>
        <button className="btn" onClick={handleClickPicture}>Picture</button>
        <button className="btn" onClick={handleSaveEntry}>Save</button>
      </div>
    </div>
  );
};
