import { useDispatch } from "react-redux";
import { useRef } from "react";

const Controls = () => {
  const dispatch = useDispatch();
  const numberInput = useRef();

  const onIncrementHandle = () => {
    dispatch({ type: "INCREMENT" });
  };

  const onDecrementHandle = () => {
    dispatch({ type: "DECREMENT" });
  };

  const onAddInputHandle = () => {
    if (numberInput.current.value) {
      dispatch({
        type: "ADD_INPUT",
        payload: { value: numberInput.current.value },
      });
      numberInput.current.value = "";
    }
  };
  const onSubtractInputHandle = () => {
    if (numberInput.current.value) {
      dispatch({
        type: "SUBTRACT_INPUT",
        payload: { value: numberInput.current.value },
      });
      numberInput.current.value = "";
    }
  };

  const onPrivacyToggleHandle = () => {
    dispatch({ type: "PRIVACY_TOGGLE" });
  };

  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <div className="container">
        <div>
          <button
            type="button"
            className="btn btn-success btn-sm px-4 mx-2 gap-3"
            onClick={onIncrementHandle}
          >
            +1
          </button>
          <button
            type="button"
            className="btn btn-danger btn-sm mx-2 px-4"
            onClick={onDecrementHandle}
          >
            -1
          </button>
          <button
            type="button"
            className="btn btn-warning btn-sm mx-2 px-4"
            onClick={onPrivacyToggleHandle}
          >
            Privacy Toggle
          </button>
        </div>
        <div className="my-4 ">
          <input
            className="number_input"
            placeholder="enter number"
            ref={numberInput}
          />
          <button
            type="button"
            className="btn btn-success btn-sm mx-2 px-4 gap-3"
            onClick={onAddInputHandle}
          >
            ADD
          </button>
          <button
            type="button"
            className="btn btn-danger btn-sm mx-2 px-4"
            onClick={onSubtractInputHandle}
          >
            MINUS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controls;
