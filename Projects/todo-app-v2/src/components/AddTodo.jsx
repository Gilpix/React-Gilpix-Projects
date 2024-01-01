import TodoButton from "./TodoButton";
import styles from "./AddTodo.module.css";
import { useRef, useContext } from "react";
import { TodoItemsFromContext } from "../store/todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsFromContext);
  const todoNameRef = useRef();
  const todoDateRef = useRef();

  const handleOnAddButtonClick = (event) => {
    event.preventDefault(); //To stop form to auto submit on Submitting form
    let todoName = todoNameRef.current.value;
    let todoDate = todoDateRef.current.value;
    addNewItem(todoName, todoDate);
    todoNameRef.current.value = "";
    todoDateRef.current.value = "";
  };

  return (
    <div className="container item-align-left">
      <form className="row" onSubmit={handleOnAddButtonClick}>
        <div className="col-6">
          <input
            type="text"
            placeholder="enter todo name"
            ref={todoNameRef}
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            placeholder="enter date"
            ref={todoDateRef}
            data-placeholder="enter due date"
            required
            aria-required="true"
          ></input>
        </div>
        <TodoButton buttonType="add"></TodoButton>
      </form>
    </div>
  );
}

export default AddTodo;
