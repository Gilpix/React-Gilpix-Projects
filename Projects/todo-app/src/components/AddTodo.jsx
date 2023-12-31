import TodoButton from "./TodoButton";
import styles from "./AddTodo.module.css";
// import { useState } from "react"; - for useState
import { useRef } from "react";

function AddTodo({ onNewItem }) {
  //METHOD 1 : Below code is for useState() method - which causes lots of renders
  //For now we are using useState to store the states of inputs but
  // in future we can user form along with useRef then we can directly get final values of inputs
  // const [todoName, setTodoName] = useState("");
  // const [todoDate, setTodoDate] = useState("");

  //Handle Name Input change and set toDoName
  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // };

  //Handle Date Input change and set toDoDate
  // const handleDateChange = (event) => {
  //   setTodoDate(event.target.value);
  // };

  // const handleOnAddButtonClick = (event) => {
  //   event.preventDefault(); //To stop form to auto submit on Submitting form
  //   onNewItem(todoName, todoDate);
  //   setTodoName("");
  //   setTodoDate("");
  // };

  //METHOD 2 : using useRef we don't need onChange so there will no no rendering of component on each letter added in input box
  const todoNameRef = useRef();
  const todoDateRef = useRef();

  const handleOnAddButtonClick = (event) => {
    event.preventDefault(); //To stop form to auto submit on Submitting form
    let todoName = todoNameRef.current.value;
    let todoDate = todoDateRef.current.value;
    onNewItem(todoName, todoDate);
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
            // value={todoName} - for useState
            // onChange={(event) => handleNameChange(event)} - for useState
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
            // value={todoDate} - for useState
            // onChange={(event) => handleDateChange(event)} - for useState
          ></input>
        </div>
        <TodoButton
          // onClickHandler={handleOnAddButtonClick}- for useState
          buttonType="add"
        ></TodoButton>
      </form>
    </div>
  );
}

export default AddTodo;
