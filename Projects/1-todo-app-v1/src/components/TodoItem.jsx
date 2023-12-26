export default function TodoItem(props) {
  let { todoName, todoDate } = props; //Destructuring
  return (
    <>
      <div className="col-6">
        <span className="item-text">{todoName}</span>
      </div>
      <div className="col-4">
        <span className="item-text">{todoDate}</span>
      </div>
    </>
  );
}
