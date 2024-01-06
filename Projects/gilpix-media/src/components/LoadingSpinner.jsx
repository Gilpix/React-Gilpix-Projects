import styles from "./LoadingSpinner.module.css";
const LoadingSpinner = () => {
  return (
    <center className={styles.spinner}>
      <div
        className="spinner-border m-5"
        style={{
          width: "3rem",
          height: "3rem",
        }}
        role="status"
      >
        <span className="sr-only"></span>
      </div>
    </center>
  );
};
export default LoadingSpinner;
