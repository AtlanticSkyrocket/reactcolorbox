import React from "react";
import './Box.css';

function Box({removeBox, backgroundColor, width=100, height=100, id}){
  return (
    <div className="Box">
          <div className="Box-color" key={id} id={id} style={{backgroundColor: backgroundColor, width: `${width}px`, height:`${height}px`}}/>
          <button className="BoxRemove-btn"  onClick={() => removeBox(id)}>X</button>
    </div>

  )
}

export default Box;