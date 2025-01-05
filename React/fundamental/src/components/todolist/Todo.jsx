export default function Todo(todo) {
  return <>{todo.isCompleted ? <del>{todo.text}</del> : <li>{todo.text} 👌🏻</li>}</>;
}
