import { MdDeleteForever } from "react-icons/md";
import styles from "./Post.module.css";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListData);

  return (
    <div className="col-4 mb-5">
      <div className={` card ${styles.postCard} }`}>
        <img
          src={post.imageUrl}
          className={`${styles.image} card-img-top `}
          width="auto"
          height="180px"
          alt="..."
        />
        <div className="card-body">
          <h5 className={`${styles.title} card-title`}>
            {post.title}
            <span
              className={`${styles.badge} position-absolute top-0 start-100 translate-middle badge rounded-pill`}
            >
              {post.reactions}
              <span className="visually-hidden">unread messages</span>
            </span>
          </h5>
          <p className={`${styles.description} card-text`}>
            {post.description}
          </p>
          {post.tags.map((tag) => {
            return (
              <span
                className={` ${styles.hashtags} badge text-white `}
                key={tag}
              >
                #{tag}
              </span>
            );
          })}
          <MdDeleteForever
            className={styles.deleteButton}
            onClick={() => deletePost(post.id)}
          ></MdDeleteForever>
        </div>
      </div>
    </div>
  );
};

export default Post;
