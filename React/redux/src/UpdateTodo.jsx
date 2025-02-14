import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getTodo, updateTodo } from "./todoListSlice";

export default function UpdateTodo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const todo = useSelector((state) => getTodo(state, Number(id)));

  console.info(todo);
  const [name, setName] = useState(todo.name);

  function handleUpdateTodo() {
    dispatch(updateTodo({ id: todo.id, name }));
    navigate("/todolist");
  }

  return (
    <div>
      <h1>Update Todo {todo.name}</h1>
      <input type="text" placeholder="Enter todo name" value={name} onChange={(e) => setName(e.target.value)} />

      <button onClick={handleUpdateTodo}>Add Todo</button>
    </div>
  );
}
