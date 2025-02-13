import { NavLink, Outlet, useLocation } from "react-router";

export default function DataLayout() {
  const location = useLocation();

  return (
    <>
      <div>
        <h2>This is Header </h2>
        <hr />
      </div>
      <div>
        <ul>
          <li>
            <NavLink
              to={{
                pathname: "/data/products",
                search: "?category=popular",
                hash: "#top",
              }}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/data/customer">Customers</NavLink>
          </li>
          <li>
            <NavLink to="/data/sellers">Sellers</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <hr />
        <p>This is Footer</p>
        <p>Location right now: {location.pathname}{location.search}{location.hash} </p>
      </div>
    </>
  );
}
