import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosActions } from "../services/actions/todosActions";

const Todos = () => {
  const { isLoading, todos, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todosActions());
  }, [dispatch]);

  return (
    <div>
      <h1>Todos app</h1>
      <h3>{isLoading && "Loading"}</h3>
      <h3>{error && <p style={{ color: "red" }}>{error}</p>}</h3>
      <div>
        {todos.map(({ title }, i) => (
          <div key={i}>
            <h1>{title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
