import TodoButton from "./TodoButtons";

export function TodoItem(props) {
  return (
    <div className="container center m-2 item-container">
      {props.items.map((item) => {
        return (
          <div key={item.id}>
            <div className="row row-align">
              <div className="col-6">
                <span className="item-text">{item.name}</span>
              </div>
              <div className="col-4">
                <span className="item-text">{item.date}</span>
              </div>
              <TodoButton buttonType="delete"></TodoButton>
            </div>
          </div>
        );
      })}
    </div>
  );
}
