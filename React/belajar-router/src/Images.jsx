import { useParams } from "react-router";

export default function Images() {
  const id = useParams();
  return (
    <div>
      <h2>Images</h2>
      <p>Page: {id["*"]}</p>
    </div>
  );
}
