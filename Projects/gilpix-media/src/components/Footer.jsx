import styles from "./Footer.module.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { SlSocialReddit } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="container ">
      <footer
        className={`d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top p-4 ${styles.footer}`}
      >
        <div className="col-md-5 d-flex align-items-center">
          {" "}
          <a
            href="/"
            className="mb-4 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <SlSocialReddit className={styles.footerLogo}>
              <use xlinkHref="#facebook"></use>
            </SlSocialReddit>
          </a>
        </div>
        <div className="col-md-3 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2023 Company, Inc
          </span>
        </div>

        <ul className="nav col-md-3 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <FaSquareFacebook className={styles.footerIcon}>
                <use xlinkHref="#facebook"></use>
              </FaSquareFacebook>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary " href="#">
              <FaInstagramSquare className={styles.footerIcon}>
                <use xlinkHref="#instagram"></use>
              </FaInstagramSquare>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary " href="#">
              <FaSquareTwitter className={styles.footerIcon}>
                <use xlinkHref="#twitter"></use>
              </FaSquareTwitter>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
