import TodoButton from "./TodoButton";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { useContext } from "react";
import { TodoItemsFromContext } from "../store/todo-items-store";

export default function TodoItems() {
  const { todoItems, deleteItem } = useContext(TodoItemsFromContext);

  return (
    <div
      className={
        todoItems.length > 0
          ? `${styles.listContainer} container center item-align-left `
          : "container center item-align-left"
      }
    >
      {todoItems.map((item) => {
        return (
          <div key={item.id}>
            <div className={`row ${styles.rowAlign} ${styles.itemRowAactive}`}>
              <TodoItem todoName={item.name} todoDate={item.date}></TodoItem>
              <TodoButton
                onClickHandler={() => deleteItem(item.id)}
                buttonType="delete"
              ></TodoButton>
            </div>
          </div>
        );
      })}
    </div>
  );
}
