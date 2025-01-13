export default function ProfileForm({ name, setName }) {
  return (
    <>
      <h3>Profile Form</h3>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
    </>
  );
}
