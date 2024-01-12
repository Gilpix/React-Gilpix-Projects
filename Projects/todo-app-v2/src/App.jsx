import AddTodo from "./components/AddTodo";
import AppHeader from "./components/AppHeader";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import Container from "./components/Container";
// import { useReducer } from "react";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center>
        <AppHeader />
        <Container>
          <AddTodo />
          <WelcomeMessage></WelcomeMessage>
          <TodoItems />
        </Container>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
