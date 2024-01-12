import { Alert as BootstrapAlert } from "react-bootstrap";
import styles from "./Alert.module.css";
import { BiSolidHide } from "react-icons/bi";

const Alert = ({ alertText, setAlert, variant }) => {
  return (
    <BootstrapAlert className="m-5" variant={variant}>
      {alertText}
      <BiSolidHide
        className={styles.alertButton}
        onClick={() => setAlert(false)}
      ></BiSolidHide>
    </BootstrapAlert>
  );
};

export default Alert;
