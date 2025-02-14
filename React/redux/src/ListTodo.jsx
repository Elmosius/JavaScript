import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addTodo, removeTodo } from "./todoListSlice";

export default function ListTodo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const list = useSelector((state) => state.todoList);
  const [name, setName] = useState("");

  function handleAddTodo() {
    if (name) {
      dispatch(addTodo({ name }));
    }
  }

  function handleDelete(id) {
    dispatch(removeTodo({ id }));
  }

  return (
    <div>
      <h1>Todo List</h1>

      <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.name}</td>
                <td>
                  <button
                    onClick={() =>
                      navigate({
                        pathname: `/todolist/edit/${todo.id}`,
                      })
                    }
                  >
                    Update
                  </button>
                  <button onClick={() => handleDelete(todo.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
