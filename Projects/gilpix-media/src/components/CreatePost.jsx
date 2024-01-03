import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import { Row, Container, Col, Alert } from "react-bootstrap";
import styles from "./CreatePost.module.css";

const CreatePost = () => {
  const { createPost } = useContext(PostListData);

  const addNewPost = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const description = event.target.elements.description.value;
    const imgSrc = event.target.elements.imgSrc.value;
    const tags = event.target.elements.tags.value.split(",");

    createPost(title, description, imgSrc, "user1", 1, tags);
  };

  return (
    <Container>
      {/* <Alert
        variant="danger"
        onClose={() => setShow(false)}
        dismissible
      ></Alert> */}
      <form
        className="container mt-5 px-5"
        onSubmit={(event) => {
          addNewPost(event);
        }}
      >
        <Row className="row">
          <Col>
            <label htmlFor="title" className={`form-label ${styles.formLabel}`}>
              Title
            </label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="enter post title"
            />
          </Col>
          <Col>
            <label
              htmlFor="imgSrc"
              className={`form-label ${styles.formLabel}`}
            >
              Image
            </label>
            <input
              type="text"
              name="imgSrc"
              className="form-control"
              placeholder="enter post image url"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <label
              htmlFor="description"
              className={`form-label ${styles.formLabel}`}
            >
              Post Description
            </label>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="write about the post"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <label htmlFor="tags" className={`form-label ${styles.formLabel}`}>
              Post Tags
            </label>
            <input
              type="text"
              name="tags"
              className="form-control"
              placeholder="write related tags. ex : vaccation, enjoy, "
            />
            <div id="emailHelp" className="form-text">
              Seprate tags with comma or space.
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-end">
            <button
              type="submit"
              className={`btn btn-primary  ${styles.submitButton}`}
            >
              Submit
            </button>
          </Col>
        </Row>
      </form>
    </Container>
  );
};
export default CreatePost;
