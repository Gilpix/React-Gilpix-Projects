function AddTodo() {
  return (
    <div className="container  m-2">
      <div className="row ">
        <div className="col-6">
          <input type="text" placeholder="enter name"></input>
        </div>
        <div className="col-4">
          <input type="date" placeholder="enter date"></input>
        </div>
        <div className="col-2 col-btn-align">
          <button className="btn btn-success todo-btn">Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
