import TodoButton from "./TodoButtons";

function AddTodo() {
  return (
    <div className="container item-container">
      <div className="row ">
        <div className="col-6">
          <input type="text" placeholder="enter name"></input>
        </div>
        <div className="col-4">
          <input type="date" placeholder="enter date"></input>
        </div>
        <TodoButton buttonType="add"></TodoButton>
      </div>
    </div>
  );
}

export default AddTodo;
