import { useParams } from "react-router";

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>Product Detail {id}</h2>
      <p>Welcome to Page Product Detail</p>
    </div>
  );
}
