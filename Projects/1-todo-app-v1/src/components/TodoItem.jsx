export function TodoItem() {
  return (
    <div className="container center m-2 item-container">
      <div className="row row-align">
        <div className="col-6">
          <span className="item-text">Buy Icecream</span>
        </div>
        <div className="col-4">
          <span className="item-text">10/12/2023</span>
        </div>
        <div className="col-2">
          <button className="btn btn-danger todo-btn">Delete</button>
        </div>
      </div>
    </div>
  );
}
