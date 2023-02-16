import React from "react";

const Choice = ({ name, bg, img, clickHandler }) => {
  return (
    <div onClick={() => clickHandler(name, bg, img)} className={`border ${bg}`}>
      <div className=" choise">
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default Choice;
