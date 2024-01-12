import styles from "./Display.module.css";

function Display({ displayValue }) {
  return (
    <input className={styles.display} value={displayValue} readOnly></input>
  );
}

export default Display;
