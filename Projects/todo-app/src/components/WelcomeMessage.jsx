import styles from "./WelcomeMessage.module.css";
import { PiListChecksBold } from "react-icons/pi";

let WelcomeMessage = ({ items }) => {
  return (
    <>
      {items == 0 && (
        <p className={styles.welcomeMessage}>
          Hurray! You have Finished All Tasks{" "}
          <PiListChecksBold className={styles.listIcon} />
        </p>
      )}
    </>
  );
};

export default WelcomeMessage;
