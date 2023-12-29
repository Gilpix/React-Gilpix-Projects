import TodoButton from "./TodoButton";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

export default function TodoItems({ items }) {
  return (
    <div className="container center m-2 item-align-left">
      {items.map((item) => {
        return (
          <div key={item.id}>
            <div className={`row ${styles.rowAlign}`}>
              <TodoItem todoName={item.name} todoDate={item.date}></TodoItem>
              <TodoButton buttonType="delete"></TodoButton>
            </div>
          </div>
        );
      })}
    </div>
  );
}