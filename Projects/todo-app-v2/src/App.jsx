import AddTodo from "./components/AddTodo";
import AppHeader from "./components/AppHeader";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import Container from "./components/Container";
import { useState } from "react";
import { TodoItemsFromContext } from "./store/todo-items-store";

function App() {
  let initialTodoItems = [
    { id: 1, name: "Buy Icecream", date: "10/12/2023" },
    { id: 2, name: "Read Articles", date: "05/12/2023" },
  ];

  //Store initial and future states of ToDo items list
  const [todoItems, settoItems] = useState(initialTodoItems);

  // new item add Handler - called on Add button click
  const handleNewItem = (value, date) => {
    if (value != "" && date != "") {
      settoItems([
        ...todoItems,
        { id: ++todoItems.length, name: value, date: date },
      ]);
    }
  };

  // delete item Handler - called on Delete button click
  const handleRemoveItem = (todoId) => {
    if (todoId != "") {
      const newTodoItemList = todoItems.filter((item) => {
        if (item.id != todoId) return item;
      });
      settoItems(newTodoItemList);
    }
  };

  return (
    <TodoItemsFromContext.Provider value={todoItems}>
      <center>
        <AppHeader />
        <Container>
          <AddTodo onNewItem={handleNewItem} />
          <WelcomeMessage></WelcomeMessage>
          <TodoItems onDeleteItem={handleRemoveItem} />
        </Container>
      </center>
    </TodoItemsFromContext.Provider>
  );
}

export default App;
