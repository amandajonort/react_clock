// Clock.jsx
import React, { useEffect, useState } from "react";

const Clock = ({ timeZone }) => {
  const [time, setTime] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString("en", { timeZone });
      setTime(currentTime);
    }, 1000);

    // Clear
    return () => clearInterval(intervalId);
  }, [timeZone]);

  return (
    <div>
      <h1>{`${timeZone}:`}</h1>
      <p>{time}</p>
    </div>
  );
};

export default Clock;
