import styles from "./Button.module.css";

let Button = ({ buttonValue }) => {
  return <button className={styles.calculatorButton}>{buttonValue}</button>;
};

export default Button;
