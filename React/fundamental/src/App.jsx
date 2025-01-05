import { useState } from "react";
import "./App.css";
import AlertButton from "./components/button/AlertButton";
import ToolBar from "./components/button/ToolBar";
import Container from "./components/Container";
import SearchForm from "./components/form/SearchForm";
import HelloWorld from "./components/HelloWorld";
import TodoList from "./components/todolist/TodoList";
import ContactForm from "./components/form/ContactForm";

function App() {
  const [query, setQuery] = useState("helo!");

  return (
    <>
      <SearchForm onSearch={setQuery} />

      <Container>
        <HelloWorld text={query} />
        <TodoList />

        <AlertButton />
      </Container>

      <Container>
        <h5>Ini Event propagation</h5>
        <ToolBar
          onClick={(e) => {
            e.stopPropagation();
            alert(e.target.innerText);
          }}
        />
      </Container>

      <Container>
        <h5>Ini state object</h5>
        <ContactForm />
      </Container>
    </>
  );
}

export default App;
