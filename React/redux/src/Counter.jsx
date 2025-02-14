import { useDispatch, useSelector } from "react-redux";
import { decrement, getCounter, getDoubleCounter, increment } from "./counterSlice";

export default function Counter() {
  let x = 5;

  const counter = useSelector((state) => state.counter);

  console.info(counter);
  const doubleCounter = useSelector(getDoubleCounter);
  const xCounter = useSelector((state) => getCounter(state, x));

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <h1>Double Counter: {doubleCounter}</h1>
      <h1>
        {x} Counter: {xCounter}
      </h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(increment(5))}>Increment + 5</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(decrement(5))}>Decrement + 5</button>
    </div>
  );
}
