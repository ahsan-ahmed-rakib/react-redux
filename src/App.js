import "./App.css";
import CounterView from "./features/counter/CounterView";
import PostsView from "./features/posts/PostsView";
// import Counter from "./components/Counter";
// import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Redux - Todos</h1>
      {/* <Counter /> */}
      {/* <Todos /> */}
      <CounterView />
      <hr />
      <PostsView />
    </div>
  );
}

export default App;
