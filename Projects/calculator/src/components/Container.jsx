import styles from "./Container.module.css";

function Container(props) {
  return <div className={styles.calculatorContainer}>{props.children}</div>;
}

export default Container;
