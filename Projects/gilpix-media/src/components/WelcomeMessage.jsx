import styles from "./WelcomeMessage.module.css";
import { SlSocialReddit } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const WelcomeMessage = ({ onGetPostList }) => {
  const navigate = useNavigate();
  return (
    <div className="px-4 py-5 my-5 text-center">
      <SlSocialReddit className={styles.logo}>
        <use xlinkHref="#facebook"></use>
      </SlSocialReddit>
      <h1 className={`${styles.h1} display-5 fw-bold `}>OOPS! No Post</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          There are no default post available. Please select any button below to
          fetch or create a new post.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            type="button"
            className={`btn btn-primary btn-md px-5 gap-3 ${styles.filledButton}`}
            onClick={onGetPostList}
          >
            Fetch Posts
          </button>
          <button
            type="button"
            onClick={() => {
              navigate("/create-post");
            }}
            className={`btn btn-primary btn-md px-4 gap-3 ${styles.hollowButton}`}
          >
            Create New Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;
