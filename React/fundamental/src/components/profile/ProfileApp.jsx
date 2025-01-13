import { useState } from "react";
import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import { ProfileContext } from "./ProfileContext";
import ProfileForm from "./ProfileForm";

export default function ProfileApp() {
  const [name, setName] = useState("Elmo");

  return (
    <>
      <ProfileContext.Provider value={name}>
        <h3>Ini coba hook useContext</h3>
        <ProfileForm name={name} setName={setName} />
        <Profile />
        <ProfileAddress />
      </ProfileContext.Provider>
    </>
  );
}
