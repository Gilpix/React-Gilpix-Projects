import AddTodo from "./components/AddTodo";
import AppHeader from "./components/AppHeader";
import { TodoItem } from "./components/TodoItem";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppHeader />
      <AddTodo />
      <TodoItem />
    </center>
  );
}

export default App;
