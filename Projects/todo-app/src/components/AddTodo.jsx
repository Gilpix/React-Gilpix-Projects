import TodoButton from "./TodoButton";
import styles from "./AddTodo.module.css";
import { useState } from "react";

function AddTodo({ onNewItem }) {
  //For now we are using useState to store the states of inputs but
  // in future we can user form then we can directly get final values of inputs
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  //Handle Name Input change and set toDoName
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  //Handle Date Input change and set toDoDate
  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleOnAddButtonClick = () => {
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="container item-align-left">
      <div className="row ">
        <div className="col-6">
          <input
            type="text"
            placeholder="enter name"
            value={todoName}
            onChange={(event) => handleNameChange(event)}
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            placeholder="enter date"
            value={todoDate}
            onChange={(event) => handleDateChange(event)}
          ></input>
        </div>
        <TodoButton
          onAddButtonClick={handleOnAddButtonClick}
          buttonType="add"
        ></TodoButton>
      </div>
    </div>
  );
}

export default AddTodo;
