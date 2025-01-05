import Todo from "./Todo";

const data = [
  {
    id: 1,
    text: "Belajar React",
    isCompleted: false,
  },
  {
    id: 2,
    text: "Belajar Next.js",
    isCompleted: false,
  },
  {
    id: 3,
    text: "Belajar Vue.js",
    isCompleted: true,
  },
];

export default function TodoList() {
  return (
    <ul>
      <h5>Belajar conditional:</h5>
      {data.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
