import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounterAction,
  incrementCounterAction,
  resetCounterAction,
} from "../services/actions/counterActions";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounterAction());
  };
  const handleDecrement = () => {
    dispatch(decrementCounterAction());
  };
  const handleReset = () => {
    dispatch(resetCounterAction());
  };

  return (
    <div>
      <h2>Counter App</h2>

      <h3>Counter: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
