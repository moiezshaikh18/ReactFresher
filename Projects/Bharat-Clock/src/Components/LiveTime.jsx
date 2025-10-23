import React, { useEffect, useState } from "react";

export const LiveTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const intervals = setInterval(() => {
      setTime(new Date().toLocaleString("en-IN"));
    }, 1000);

    return () => clearInterval(intervals);
  }, []);

  return (
    <div className="clock-container">
      <div className="clock-time">🕒 {time}</div>
    </div>
  );
};
