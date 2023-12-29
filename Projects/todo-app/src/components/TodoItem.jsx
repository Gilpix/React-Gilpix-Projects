import styles from "./TodoItem.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function TodoItem(props) {
  let { todoName, todoDate } = props; //Destructuring
  return (
    <>
      <div className="col-6">
        <span className={styles.itemText}>
          <FaLongArrowAltRight className={styles.itemArrow} />
          {todoName}
        </span>
      </div>
      <div className="col-4">
        <span className={styles.itemText}>{todoDate}</span>
      </div>
    </>
  );
}
