import { useRef } from "react";

export default function AlertButton({ text = "Click Me!", msg = "kosong" }) {
  const counter = useRef(0);

  function handleClick() {
    alert(msg + " " + counter.current++);
  }

  return <button onClick={handleClick}>{text}</button>;
}
