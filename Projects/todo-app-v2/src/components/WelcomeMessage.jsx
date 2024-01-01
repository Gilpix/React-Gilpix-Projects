import styles from "./WelcomeMessage.module.css";
import { PiListChecksBold } from "react-icons/pi";
import { useContext } from "react";
import { TodoItemsFromContext } from "../store/todo-items-store";

let WelcomeMessage = ({ items }) => {
  const { todoItems } = useContext(TodoItemsFromContext);
  return (
    <>
      {todoItems == 0 && (
        <p className={styles.welcomeMessage}>
          Hurray! You have Finished All Tasks{" "}
          <PiListChecksBold className={styles.listIcon} />
        </p>
      )}
    </>
  );
};

export default WelcomeMessage;
