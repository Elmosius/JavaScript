import { useParams } from "react-router";

export default function NotFound() {
  const id = useParams();
  return (
    <div>
      <h2>Not Found Page: /{id["*"]}</h2>
    </div>
  );
}
