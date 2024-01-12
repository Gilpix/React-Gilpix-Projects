import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext([]);

const todoItemReducer = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;
  if (action.type === "NEW_ITEM") {
    // console.log("INSIDE - todoItemReducer 57");
    // console.log(action);
    if (
      action.payload &&
      action.payload.itemName != "" &&
      action.payload.itemDueDate != ""
    ) {
      newTodoItems = [
        ...currentTodoItems,
        {
          id: ++currentTodoItems.length,
          name: action.payload.itemName,
          date: action.payload.itemDueDate,
        },
      ];
    }
  } else if (action.type == "DELETE_ITEM") {
    if (action.payload.todoId != "") {
      newTodoItems = currentTodoItems.filter((item) => {
        if (item.id != action.payload.todoId) return item;
      });
    }
  }
  // console.log("newTodoItems - inside todoItemReducer 80");
  // console.log(newTodoItems);
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

  let initialTodoItems = [
    { id: 1, name: "Buy Icecream", date: "10/12/2023" },
    { id: 2, name: "Read Articles", date: "05/12/2023" },
  ];

  //Store initial and future states of ToDo items list
  // const [todoItems, settoItems] = useState(initialTodoItems);

  // new item add Handler - called on Add button click
  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName: itemName,
        itemDueDate: itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  // delete item Handler - called on Delete button click
  const deleteItem = (todoId) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoId,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
