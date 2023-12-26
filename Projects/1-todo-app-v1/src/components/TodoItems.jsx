import TodoButton from "./TodoButtons";
import TodoItem from "./TodoItem";

export default function TodoItems({ items }) {
  return (
    <div className="container center m-2 item-container">
      {items.map((item) => {
        return (
          <div key={item.id}>
            <div className="row row-align">
              <TodoItem todoName={item.name} todoDate={item.date}></TodoItem>
              <TodoButton buttonType="delete"></TodoButton>
            </div>
          </div>
        );
      })}
    </div>
  );
}
