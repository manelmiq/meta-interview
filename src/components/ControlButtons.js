import React from "react";

const ControlButtons = ({moveToRight, moveToLeft}) => {
  return (
    <div className="control-buttons">
      <button onClick={moveToRight}> {'>'} </button>
      <button onClick={moveToLeft}>{'<'}</button>
    </div>
  );
}

export default ControlButtons;