import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();

  const onIncrementHandle = () => {
    dispatch({ type: "INCREMENT" });
  };

  const onDecrementHandle = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button
        type="button"
        className="btn btn-success btn-md px-4 gap-3"
        onClick={onIncrementHandle}
      >
        +1
      </button>
      <button
        type="button"
        className="btn btn-danger btn-md px-4"
        onClick={onDecrementHandle}
      >
        -1
      </button>
    </div>
  );
};

export default Controls;
