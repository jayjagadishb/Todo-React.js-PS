import "./App.css";
import AddTodo from "./components/AddTodo";
import SearchTodo from "./components/SearchTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1>TODO</h1>
      <SearchTodo />
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
