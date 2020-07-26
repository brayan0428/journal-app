import React from "react";
import moment from 'moment'
import { useDispatch } from "react-redux";
import { activeNote } from "../actions/notes";

export const EntryItem = ({id, title,body,date,url}) => {
  const dispatch = useDispatch()
  const dateMoment = moment(date)

  const handleEntryClick = () => {
    const note = {
      title,body,date,url
    }
    dispatch(activeNote(id, note))
  }

  return (
    <div className="sidebar__entry-box pointer" onClick={handleEntryClick}>
      {
        url && 
        <div
          className="sidebar__entry-box-image"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage:
              `url(${url})`
          }}
        ></div>
      }
      <div className="sidebar__entry-box-details">
        <h4>{title}</h4>
        <p>
          {
            body.length > 50 ? `${body.substr(0,50)}...` : body
          }
        </p>
      </div>
      <div className="sidebar__entry-date">
        <span>{dateMoment.format('dddd')}</span>
        <h4><span>{dateMoment.format('Do')}</span></h4>
      </div>
    </div>
  );
};
