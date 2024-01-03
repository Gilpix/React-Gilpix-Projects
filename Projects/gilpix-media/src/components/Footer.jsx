import styles from "./Footer.module.css";
import {
  FaInstagramSquare,
  FaSquareFacebook,
  FaSquareTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container ">
      <footer
        className={`d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top p-4 ${styles.footer}`}
      >
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <svg className="bi" width="30" height="24">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2023 Company, Inc
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <FaSquareFacebook className="bi" width="42" height="42">
                <use xlinkHref="#facebook"></use>
              </FaSquareFacebook>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary " href="#">
              <FaInstagramSquare className="bi" width="42" height="42">
                <use xlinkHref="#instagram"></use>
              </FaInstagramSquare>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary " href="#">
              <FaSquareTwitter className="bi" width="42" height="42">
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
