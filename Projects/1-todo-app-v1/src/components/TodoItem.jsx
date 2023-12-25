export function TodoItem() {
  let items = [
    { id: 1, name: "Buy Icecream", date: "10/12/2023" },
    { id: 2, name: "Read Articles", date: "05/12/2023" },
  ];

  return (
    <div className="container center m-2 item-container">
      {items.map((item) => {
        return (
          <div key={item.id}>
            <div className="row row-align">
              <div className="col-6">
                <span className="item-text">{item.name}</span>
              </div>
              <div className="col-4">
                <span className="item-text">{item.date}</span>
              </div>
              <div className="col-2">
                <button className="btn btn-danger todo-btn">Delete</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
