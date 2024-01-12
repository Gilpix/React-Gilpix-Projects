import styles from "./TodoButton.module.css";
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

let TodoButton = ({ buttonType, onClickHandler }) => {
  return (
    <div className="col-2">
      <button
        className={
          buttonType == "add"
            ? `{ ${styles.todoButton} ${styles.todoButtonGreen} }`
            : `{ ${styles.todoButton} ${styles.todoButtonRed} }`
        }
        onClick={onClickHandler}
      >
        {buttonType == "add" ? (
          <FaPlus className={styles.buttonTextAdd} />
        ) : (
          <RxCross2 className={styles.buttonTextDelete} />
        )}
      </button>
    </div>
  );
};

export default TodoButton;
