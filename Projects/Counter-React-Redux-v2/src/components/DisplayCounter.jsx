import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((state) => state.counter.counterVal);
  return <h4 className="text-body-tertiary mb-5">Current value : {counter}</h4>;
};

export default DisplayCounter;
