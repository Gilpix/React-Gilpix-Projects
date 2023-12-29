import styles from "./ErrorMessage.module.css";

let ErrorMessage = ({ items }) => {
  return (
    <>
      {items == 0 && (
        <p className={styles.errorMessage}>
          Hurray! You have Finished All Tasks
        </p>
      )}
    </>
  );
};

export default ErrorMessage;
