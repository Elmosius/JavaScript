import { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [temp, setTemp] = useState("");

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Search..." value={temp} onChange={(e) => setTemp(e.target.value)} />
      <button type="submit" onClick={() => temp && onSearch(temp)}>
        Search
      </button>
    </form>
  );
}
