import Button from "./Button";
import KeyPadRow from "./KeyPadRow";

let CalculatorKeyPad = ({ buttonsList, onClickHandler }) => {
  return (
    <div className="container">
      {buttonsList.map((buttonsRow) => (
        <KeyPadRow
          buttonsRow={buttonsRow}
          onButtonClick={onClickHandler}
          key={Math.random()}
        ></KeyPadRow>
      ))}
    </div>
  );
};

export default CalculatorKeyPad;
