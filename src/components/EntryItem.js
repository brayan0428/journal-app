import React from "react";

export const EntryItem = () => {
  return (
    <div className="sidebar__entry-box pointer">
      <div
        className="sidebar__entry-box-image"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage:
            "url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png)",
        }}
      ></div>
      <div className="sidebar__entry-box-details">
        <h4>Title</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum beatae
          fugiat
        </p>
      </div>
      <div className="sidebar__entry-date">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
