import { Outlet } from "react-router";

export default function DataLayout() {
  return (
    <>
      <div>
        <h2>This is Header </h2>
        <hr />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <hr />
        <p>This is Footer</p>
      </div>
    </>
  );
}
