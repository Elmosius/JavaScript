export default function AlertButton({ text = "Click Me!", msg = "kosong" }) {
  return <button onClick={() => alert(msg)}>{text}</button>;
}
