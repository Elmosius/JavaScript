import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

export default function ProductSearch() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");

  function handleSearch() {
    if (search) {
      navigate({
        pathname: "/data/products/search",
        search: `?search=${search}`,
      });
    }
  }

  return (
    <div>
      <h2>Product Search</h2>
      <p>Welcome to Page Product Search</p>
      <input type="text" placeholder="Search Product" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={handleSearch}>Search</button>

      <p>Your search: {searchParams.get("search")}</p>
    </div>
  );
}
