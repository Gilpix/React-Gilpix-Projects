import styles from "./TodoButton.module.css";

let TodoButton = ({ buttonType, onAddButtonClick }) => {
  return (
    <div className="col-2">
      <button
        className={
          buttonType == "add"
            ? `btn btn-success ${styles.todoButton}`
            : `btn btn-danger ${styles.todoButton}`
        }
        onClick={onAddButtonClick}
      >
        {buttonType == "add" ? "Add" : "Delete"}
      </button>
    </div>
  );
};

export default TodoButton;
