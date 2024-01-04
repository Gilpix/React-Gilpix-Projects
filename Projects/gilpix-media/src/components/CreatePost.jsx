import { useContext, useState, useRef } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import { Row, Container, Col, Button } from "react-bootstrap";
import styles from "./CreatePost.module.css";
import Alert from "./Alert";

const CreatePost = () => {
  const { createPost } = useContext(PostListData);
  //To change status of Error message for any empty input
  const [errorAlert, setErrorAlert] = useState(false);
  //To change status of Success message for post creation
  const [successAlert, setSuccessAlert] = useState(false);

  //To save the users input
  const titleElement = useRef("");
  const descriptionElement = useRef("");
  const imgSrcElement = useRef("");
  const tagsElement = useRef([]);

  const addNewPost = (event) => {
    event.preventDefault();
    const title = titleElement.current.value;
    const description = descriptionElement.current.value;
    const imgSrc = imgSrcElement.current.value;
    const tags = tagsElement.current.value.split(",").filter((r) => r !== "");

    if (title == "" || description == "" || imgSrc == "" || tags.length == 0)
      setErrorAlert(true);
    else {
      createPost(title, description, imgSrc, "user1", 1, tags);
      setSuccessAlert(true);
      titleElement.current.value = "";
      descriptionElement.current.value = "";
      imgSrcElement.current.value = "";
      tagsElement.current.value = "";
    }
  };

  return (
    <Container>
      {errorAlert && (
        <Alert
          alertText={"Plese enter all fields to create a post"}
          setAlert={setErrorAlert}
          variant={"danger"}
        ></Alert>
      )}
      {successAlert && (
        <Alert
          alertText={"Post created successfully!!!"}
          setAlert={setSuccessAlert}
          variant={"success"}
        ></Alert>
      )}

      <form
        className={styles.formContainer}
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
              ref={titleElement}
              className="form-control"
              placeholder="how are you feeling today..."
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
              ref={imgSrcElement}
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
              ref={descriptionElement}
              className="form-control"
              placeholder="write more about it..."
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
              ref={tagsElement}
              className="form-control"
              placeholder="write related tags. Seprate tags with comma or space. ex : vaccation, enjoy   "
            />
            <div
              id="emailHelp"
              className="form-text text-secondary font-italic font-weight-light text-small"
            ></div>
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
