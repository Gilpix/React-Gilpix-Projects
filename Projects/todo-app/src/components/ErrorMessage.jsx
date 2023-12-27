import styles from "./ErrorMessage.module.css";

let ErrorMessage = ({ items }) => {
  return (
    <>{items == 0 && <p className={styles.errorMessage}> No Item found!</p>}</>
  );
};

export default ErrorMessage;
