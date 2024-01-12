import { useContext, useState, useRef } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import { Row, Container, Col, Button } from "react-bootstrap";
import styles from "./CreatePost.module.css";
import Alert from "./Alert";
import { Form, useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { createPost } = useContext(PostListData);
  //To change status of Error message for any empty input
  const [errorAlert, setErrorAlert] = useState(false);
  //To change status of Success message for post creation
  const [successAlert, setSuccessAlert] = useState(false);
  //To allow navigation to other url of the app
  const navigate = useNavigate();

  //No Longer needed as React router provided FORM
  //To save the users input
  // const titleElement = useRef("");
  // const descriptionElement = useRef("");
  // const imageUrlElement = useRef("");
  // const tagsElement = useRef([]);

  const addNewPost = (event) => {
    event.preventDefault();
    const title = titleElement.current.value;
    const description = descriptionElement.current.value;
    const imageUrl = imageUrlElement.current.value;
    const tags = tagsElement.current.value.split(",").filter((r) => r !== "");

    if (title == "" || description == "" || imageUrl == "" || tags.length == 0)
      setErrorAlert(true);
    else {
      createPost(title, description, imageUrl, 1, "user1", tags);
      setSuccessAlert(true);
      titleElement.current.value = "";
      descriptionElement.current.value = "";
      imageUrlElement.current.value = "";
      tagsElement.current.value = "";
      navigate("/");
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

      <Form
        method="POST"
        className={styles.formContainer}
        // onSubmit={(event) => {
        //   addNewPost(event);
        // }}
      >
        <Row className="row">
          <Col>
            <label htmlFor="title" className={`form-label ${styles.formLabel}`}>
              Title
            </label>
            <input
              type="text"
              name="title"
              // ref={titleElement}
              className="form-control"
              placeholder="how are you feeling today..."
            />
          </Col>
          <Col>
            <label
              htmlFor="imageUrl"
              className={`form-label ${styles.formLabel}`}
            >
              Image
            </label>
            <input
              type="text"
              name="imageUrl"
              // ref={imageUrlElement}
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
              // ref={descriptionElement}
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
              // ref={tagsElement}
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
          <Col className="text-end mt-3">
            <button
              type="submit"
              className={`btn btn-primary px-3  ${styles.submitButton}`}
            >
              Post
            </button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export const createPostAction = async (data) => {
  console.log("Start");
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: postData.title,
      description: postData.title,
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: postData.tags[0],
      category: postData.tags[0],
      thumbnail: postData.imageUrl,
      images: [postData.imageUrl, postData.imageUrl],
    }),
  }).then((res) => res.json());
};
export default CreatePost;
