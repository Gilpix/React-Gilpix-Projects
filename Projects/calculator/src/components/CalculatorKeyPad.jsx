import Button from "./Button";
import KeyPadRow from "./KeyPadRow";

let CalculatorKeyPad = ({ buttonsList }) => {
  return (
    <div className="container">
      {buttonsList.map((buttonsRow) => (
        <KeyPadRow buttonsRow={buttonsRow} key={Math.random()}></KeyPadRow>
      ))}
    </div>
  );
};

export default CalculatorKeyPad;
