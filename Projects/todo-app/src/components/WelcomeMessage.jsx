import styles from "./WelcomeMessage.module.css";

let WelcomeMessage = ({ items }) => {
  return (
    <>
      {items == 0 && (
        <p className={styles.welcomeMessage}>
          Hurray! You have Finished All Tasks
        </p>
      )}
    </>
  );
};

export default WelcomeMessage;
