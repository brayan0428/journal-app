import React, { useEffect, useRef } from "react";
import { NoteAppBar } from "./NoteAppBar";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";
import { activeNote, startDeleteNote } from "../actions/notes";

export const Note = () => {
  const dispatch = useDispatch()
  const {active:note} = useSelector(state => state.notes)
  const [values, inputChangeValue, reset] = useForm(note)
  const idRef = useRef(note.id)

  const {title,body,id} = values

  const handleDelete = () => {
    dispatch(startDeleteNote(id))
  }

  useEffect(() => {
    if(note.id !== idRef.current){
      reset(note)
      idRef.current = note.id
    }
  }, [note, reset])

  useEffect(() => {
    dispatch(activeNote(values.id, {...values}))
  }, [values, dispatch])

  return (
    <div className="note__content">
      <NoteAppBar />

      <div className="note__details">
        <input
          type="text"
          autoComplete="off"
          placeholder="Some title"
          className="note__title-input"
          value={title}
          name="title"
          onChange={inputChangeValue}
        />

        <textarea
          placeholder="What happened today"
          className="note__textarea"
          value={body}
          name="body"
          onChange={inputChangeValue}
        ></textarea>

        {
          note.url && 
          <div className="note__image">
            <img
              src={note.url}
              alt="Imagen"
            />
          </div>
        }
      </div>
      <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
    </div>
  );
};
