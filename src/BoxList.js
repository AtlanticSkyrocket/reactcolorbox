import React, { useState } from "react";
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from 'uuid';

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  const removeBox = id => {
    const newBoxes = boxes.filter(b => b.id !== id)
    setBoxes(newBoxes);
  }
  const createBox = box => {
    const newBox = {...box, id: uuid()}
    setBoxes(boxes => [...boxes, newBox]);
  }

  const boxList = boxes.map(({backgroundColor, width, height, id}) => <Box removeBox={removeBox} backgroundColor={backgroundColor} width={width} height={height} key={id} id={id}/>)
  return (
    <div>
      <h1>Box List</h1>
      <NewBoxForm createBox={createBox}/>
      <div className="BoxList-container">
      {boxList}  
      </div>
 
    </div>
  );
}

export default BoxList;