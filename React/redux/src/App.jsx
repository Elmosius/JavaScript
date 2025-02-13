import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Hello redux</h1>
      <button onClick={() => navigate("/counter")}>Go to Counter</button>
    </>
  );
}

export default App;
