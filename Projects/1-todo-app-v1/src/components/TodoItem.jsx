import styles from "./TodoItem.module.css";

export default function TodoItem(props) {
  let { todoName, todoDate } = props; //Destructuring
  return (
    <>
      <div className="col-6">
        <span className={styles.itemText}>{todoName}</span>
      </div>
      <div className="col-4">
        <span className={styles.itemText}>{todoDate}</span>
      </div>
    </>
  );
}
