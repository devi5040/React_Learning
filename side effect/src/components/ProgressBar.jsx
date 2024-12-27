import React, { useEffect, useState } from "react";

const TIMER = 3000;

function ProgressBar() {
  const [remainingTime, setRemainingTime] = useState(TIMER);

  useEffect(() => {
    const intervalStart = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);
    return () => {
      clearInterval(intervalStart);
    };
  }, []);
  return <progress value={remainingTime} max={TIMER} />;
}

export default ProgressBar;
