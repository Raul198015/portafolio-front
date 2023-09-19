import React, { useState, useEffect } from "react";
import "./DigitalClockStyle.css";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const formattedDate = time.toLocaleDateString(undefined, options);
  const formattedTime = time.toLocaleTimeString();

  return (
    <div className="digital-clock">
      <div className="time">{formattedTime}</div>
      <div className="date">{formattedDate}</div>
    </div>
  );
};

export default DigitalClock;







