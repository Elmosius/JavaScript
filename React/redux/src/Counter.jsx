import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";

export default function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(increment(5))}>Increment + 5</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(decrement(5))}>Decrement + 5</button>
    </div>
  );
}
