import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

export default function ProfileAddress() {
  const profile = useContext(ProfileContext);
  return (
    <>
      <h3>Profile Address</h3>
      <p>Alamat: {profile}</p>
    </>
  );
}
