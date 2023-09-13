import { applyMiddleware, createStore } from "redux";
// import counterReducer from "./services/reducers/counterReducer";
import todosReducer from "./services/reducers/todosReducer";
const thunk = require("redux-thunk").default;

// const store = createStore(counterReducer);
const store = createStore(todosReducer, applyMiddleware(thunk));
export default store;
