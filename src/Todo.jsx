import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./storeredux";
const Todo= () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div
    >
      <div>Count:{count}</div>
      <br/>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br/>
      <br/>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      
    </div>
  );
};

export default Todo;