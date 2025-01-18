import { useRef, useState } from "react";

export default function GuessBook() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  //   bisa dibuat untuk manipulasi DOM
  const inputName = useRef(null);

  console.info("render");
  function handleSubmit(e) {
    e.preventDefault();

    alert(`Name: ${name}, Message: ${message}`);

    inputName.current.focus();

    setName("");
    setMessage("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input ref={inputName} type="text" value={name} onChange={(e) => setName(e.target.value)} autoFocus />
        </div>
        <div>
          <label htmlFor="message">message</label>
          <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <br></br>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
