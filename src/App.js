import "./App.css";
import CounterView from "./features/counter/CounterView";
// import Counter from "./components/Counter";
// import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Redux - Todos</h1>
      {/* <Counter /> */}
      {/* <Todos /> */}
      <CounterView />
    </div>
  );
}

export default App;
