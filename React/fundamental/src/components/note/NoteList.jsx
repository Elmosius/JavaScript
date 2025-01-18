import Note from "./Note.jsx";
import { useContext, useMemo, useRef, useState } from "react";
import { NotesContext } from "./NoteContext.jsx";

export default function NoteList() {
  const notes = useContext(NotesContext);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  const filteredNotes = useMemo(() => {
    console.info("Filtering notes");
    return notes.filter((note) => note.text.toUpperCase().includes(search.toUpperCase()));
  }, [notes, search]);

  function handleSearch() {
    console.info("Search");
    setSearch(searchInput.current.value);
  }

  return (
    <div>
      <input ref={searchInput} placeholder="Search" />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {filteredNotes.map((note) => (
          <li key={note.id}>
            <Note note={note} />
          </li>
        ))}
      </ul>
    </div>
  );
}
