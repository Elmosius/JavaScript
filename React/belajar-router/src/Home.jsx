import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate({
      pathname: "/data",
    });
  };

  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to Page Home</p>
      <button onClick={handleClick}>Go To Data Page</button>
    </div>
  );
}
