import { useRef, useState } from "react";

export default function Timer() {
  const [now, setNow] = useState(null);
  const [time, setTime] = useState(null);
  const timer = useRef(null);

  console.info("render");
  function handleStart() {
    setTime(Date.now());
    setNow(Date.now());
    timer.current = setInterval(() => {
      setTime(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
  }

  return (
    <>
      <h5>Timer: {time - now}</h5>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
