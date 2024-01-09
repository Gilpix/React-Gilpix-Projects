import styles from "./Sidebar.module.css";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePostAdd } from "react-icons/md";
import { SlSocialReddit } from "react-icons/sl";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div
        className={`${styles.sidebar} d-flex flex-column flex-shrink-0 p-3 text-bg-dark `}
        style={{ width: "220px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <SlSocialReddit className={styles.navLogo}>
            <use xlinkHref="#Gilpix"></use>
          </SlSocialReddit>
          <span className="fs-4">GilPix</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto ">
          <li className="nav-item">
            <Link to="/" className="nav-link" aria-current="page">
              <svg className="bi pe-none me-2" width="24" height="24">
                <IoHomeOutline className={styles.navIcon}></IoHomeOutline>
              </svg>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/create-post" className="nav-link">
              <svg className="bi pe-none me-2" width="24" height="24">
                <MdOutlinePostAdd className={styles.navIcon}></MdOutlinePostAdd>
              </svg>
              Create Post
            </Link>
          </li>
        </ul>
        {/* <hr /> */}
        {/* <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default Sidebar;
