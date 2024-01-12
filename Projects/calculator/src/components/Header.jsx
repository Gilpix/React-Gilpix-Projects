import styles from "./Header.module.css";

function Header({ heading }) {
  return <h1 className={styles.heading}>{heading}</h1>;
}

export default Header;
