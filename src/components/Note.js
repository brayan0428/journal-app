import React from "react";
import { NoteAppBar } from "./NoteAppBar";

export const Note = () => {
  return (
    <div className="note__content">
      <NoteAppBar />

      <div className="note__details">
        <input
          type="text"
          autoComplete="off"
          placeholder="Some title"
          className="note__title-input"
        />

        <textarea
          placeholder="What happened today"
          className="note__textarea"
        ></textarea>

        <div className="note__image">
          <img
            src="https://revo300.academy/wp-content/uploads/2019/12/blur-close-up-code-computer-546819-1080x675.jpg"
            alt="Imagen"
          />
        </div>
      </div>
    </div>
  );
};
