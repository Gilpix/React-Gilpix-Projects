import AddTodo from "./components/AddTodo";
import AppHeader from "./components/AppHeader";
import TodoItems from "./components/TodoItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";

function App() {
  let itemsList = [
    { id: 1, name: "Buy Icecream", date: "10/12/2023" },
    { id: 2, name: "Read Articles", date: "05/12/2023" },
  ];
  // let itemsList = [];

  return (
    <center className="todo-container">
      <AppHeader />
      <AddTodo />
      <ErrorMessage items={itemsList}></ErrorMessage>
      <TodoItems items={itemsList} />
    </center>
  );
}

export default App;
