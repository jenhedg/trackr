import React, { useState, useEffect } from "react";

function BtnTimer(props) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    toggle();
  }

  function handleReset() {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setIsActive(false);
  }

  function toggle() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    let interval = null;
    console.log('initial interval:', interval);

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
        console.log('Seconds/1000ms:', seconds);
      }, 1000);

      if (seconds === 60) {
        setMinutes(minutes => minutes + 1);
        setSeconds(0);
        clearInterval(interval);
      }

      if (minutes === 60) {
        setHours(hours => hours + 1);
        setMinutes(0);
      }
    } else if (!isActive) {
      clearInterval(interval);
    }
    return () =>
      clearInterval(interval);
  }, [isActive, seconds, minutes, hours]);

  return (
    <div>
      <button className="btnTimer" onClick={handleClick}>{isActive ? 'Stop' : 'Start'}</button>
      <button className="button" onClick={handleReset}>Reset</button>
      <div>
        <span>Time:{hours}:{minutes}:{seconds}</span>
      </div>
    </div>
  );
}

export default BtnTimer;