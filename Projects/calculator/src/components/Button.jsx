import styles from "./Button.module.css";

let Button = ({ buttonValue, onButtonClick }) => {
  return (
    <button
      className={styles.calculatorButton}
      onClick={(value) => onButtonClick(buttonValue)}
    >
      {buttonValue}
    </button>
  );
};

export default Button;
