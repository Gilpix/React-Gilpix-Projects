let TodoButton = ({ buttonType }) => {
  return (
    <div className="col-2">
      <button
        className={
          buttonType == "add"
            ? "btn btn-success todo-btn"
            : "btn btn-danger todo-btn"
        }
      >
        {buttonType == "add" ? "Add" : "Delete"}
      </button>
    </div>
  );
};

export default TodoButton;
