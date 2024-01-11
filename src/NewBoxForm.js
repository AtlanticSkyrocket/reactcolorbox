import React, { useState } from "react";

/** Form for creating a new box to add to the list.
 * 
 * Has state for background color, width, height fo the box; on submission,
 * sends { backgroundColor, width, height} to tfn rec'd from parent.
 * 
 */

function NewBoxForm({createBox}){
  const INITIAL_STATE = {
    backgroundColor: "#000000",
    width: 100,
    height: 100
  }
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send { background, width, height } to parent & clear form */

  const handleCreateBox = evt => {
    evt.preventDefault();
    createBox(formData);
    setFormData(INITIAL_STATE);
  }

  /** Update local state w/curr state of input elem */

  const handleChange = evt => {
    const { name, value} = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  /** Render form */
  return (
    <div>
      <form onSubmit={handleCreateBox}>
        <label htmlFor="backgroundColor">Background Color:</label>
        <input 
          type="color"
          id="backgroundColor"
          name="backgroundColor"
          value={formData.backgroundColor}
          onChange={handleChange}
        />

        <label htmlFor="width">Width:</label>
        <input
          type="number"
          id="width"
          name="width"
          value={formData.width}
          onChange={handleChange}
        />

        <label htmlFor="height">Height:</label>
        <input
          type="number"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
        <button>Create Box</button>
      </form>
    </div>
  )
}

export default NewBoxForm;