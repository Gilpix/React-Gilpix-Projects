import styles from "./TodoButton.module.css";

let TodoButton = ({ buttonType, onClickHandler }) => {
  return (
    <div className="col-2">
      <button
        className={
          buttonType == "add"
            ? `btn btn-success ${styles.todoButton}`
            : `btn btn-danger ${styles.todoButton}`
        }
        onClick={onClickHandler}
      >
        {buttonType == "add" ? "Add" : "Delete"}
      </button>
    </div>
  );
};

export default TodoButton;
