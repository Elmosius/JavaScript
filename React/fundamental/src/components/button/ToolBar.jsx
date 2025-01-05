export default function ToolBar({ onClick }) {
  return (
    <div onClick={onClick} style={{ border: "1px solid black", padding: "10px" }}>
      <button onClick={onClick}>Add</button>
      <button onClick={onClick}>Edit</button>
      <button onClick={onClick}>Delete</button>
    </div>
  );
}
