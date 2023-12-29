import Button from "./Button";

let KeyPadRow = ({ buttonsRow, onButtonClick }) => {
  return (
    <div className="row mt-3">
      {buttonsRow.map((item) => (
        <div className="col-4" key={item.id}>
          <Button
            buttonValue={item.value}
            onButtonClick={onButtonClick}
          ></Button>
        </div>
      ))}
    </div>
  );
};

export default KeyPadRow;
