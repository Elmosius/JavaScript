import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

export default function Profile() {
  const profile = useContext(ProfileContext);
  return (
    <>
      <h3>Profile</h3>
      <p>Hallo {profile}</p>
    </>
  );
}
