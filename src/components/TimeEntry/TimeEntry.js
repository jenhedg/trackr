import React, { useState, useEffect } from "react";
import BtnTimer from "../BtnTimer/BtnTimer";

function TimeEntry(props) {
  const [isActive, setIsActive] = useState(false);
  const [description, setDescription] = useState('');

  function handleChange(e) {
    setDescription(e.target.value);
  }


  return (
    <div>
      <form>
        <label for={description}>
          What are you working on?
          <input
            id={props.id}
            className="timeEntry"
            type="text"
            value={description}
            onChange={handleChange}
          />
        </label>
      </form>
      <BtnTimer></BtnTimer>
      <div className="timeEntryContainer">
        <h2>Entry item output:</h2>
        <ul>
          <li className="timeEntry__item">{description}</li>
        </ul>
      </div>
    </div>
  );
}

export default TimeEntry;