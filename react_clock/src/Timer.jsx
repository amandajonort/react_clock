// Timer.jsx
import React, { useEffect, useState } from "react";
import "./App.css";

const Timer = ({ startTime }) => {
  const [timeRemaining, setTimeRemaining] = useState(startTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining((prevTime) => prevTime - 1);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    // Clear
    return () => clearInterval(intervalId);
  }, [timeRemaining]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div>
      <h2>Timer:</h2>
      <p>{`${minutes} min ${seconds} sec`}</p>
    </div>
  );
};

export default Timer;
