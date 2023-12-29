import TodoButton from "./TodoButton";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

export default function TodoItems({ items, onDeleteItem }) {
  const handleOnDeleteButtonClick = () => {
    onDeleteItem();
  };

  return (
    <div
      className={
        items.length > 0
          ? `${styles.listContainer} container center item-align-left `
          : "container center item-align-left"
      }
    >
      {items.map((item) => {
        return (
          <div key={item.id}>
            <div className={`row ${styles.rowAlign}`}>
              <TodoItem todoName={item.name} todoDate={item.date}></TodoItem>
              <TodoButton
                onClickHandler={() => onDeleteItem(item.id)}
                buttonType="delete"
              ></TodoButton>
            </div>
          </div>
        );
      })}
    </div>
  );
}
