import React, { Component, Fragment } from "react";
import Post from "../../component/Post/Post";
import axios from "axios";
import { Form, Card, Button } from "react-bootstrap";

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      userId: 1,
      id: 1,
      title: "",
      body: "",
    },
    isUpdate: false,
  };

  getPostAPI = () => {
    axios
      .get("http://localhost:3004/posts?_sort=id&_order=desc")
      .then((result) => {
        this.setState({
          post: result.data,
        });
      });
  };

  postDataToAPI = () => {
    axios.post(`http://localhost:3004/posts/`, this.state.formBlogPost).then(
      (res) => {
        console.log(res);
        this.getPostAPI();
        this.setState(
          {
            formBlogPost: {
              id: 1,
              title: "",
              body: "",
            },
          },
          () => {
            alert("Insert Data Success!");
            console.log("Form Cleared!");
          }
        );
      },
      (err) => {
        console.log("error :", err);
      }
    );
  };

  putDataToAPI = () => {
    axios
      .put(
        `http://localhost:3004/posts/${this.state.formBlogPost.id}`,
        this.state.formBlogPost
      )
      .then(
        (res) => {
          console.log(res);
          this.getPostAPI();
          this.setState(
            {
              isUpdate: false,
              formBlogPost: {
                id: 1,
                title: "",
                body: "",
              },
            },
            () => {
              console.log("Status update returned to: " + this.state.isUpdate);
              console.log("Form Cleared");
            }
          );
        },
        (err) => {
          console.log("error :", err);
        }
      );
  };

  handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      this.getPostAPI();
    });
  };

  handleUpdate = (data) => {
    console.log(data);
    this.setState(
      {
        formBlogPost: data,
        isUpdate: true,
      },
      () => {
        console.log("Status update: " + this.state.isUpdate);
      }
    );
    /* console.log(data);
    axios
      .put(`http://localhost:3004/posts/${data}`, this.state.formBlogPost)
      .then((res) => {
        console.log(res);
        this.getPostAPI();
      }); */
  };

  handleInfo = () => {
    console.log("Status update: " + this.state.isUpdate);
  };

  handleFormChange = (event) => {
    let formBlogPostNew = { ...this.state.formBlogPost };
    let timeStamp = new Date().getTime();
    if (!this.state.isUpdate) {
      formBlogPostNew["id"] = timeStamp;
    }
    formBlogPostNew[event.target.name] = event.target.value;
    this.setState(
      {
        formBlogPost: formBlogPostNew,
      },
      () => {
        // console.log("Value Obj formBlogPost ", this.state.formBlogPost);
      }
    );
  };

  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.putDataToAPI();
    } else {
      this.postDataToAPI();
    }
  };

  componentDidMount() {
    // Get API from Method
    this.getPostAPI();
  }

  render() {
    return (
      <Fragment>
        <Card>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  name="title"
                  type="text"
                  placeholder="Enter Title"
                  value={this.state.formBlogPost.title}
                  onChange={this.handleFormChange}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Blog Content</Form.Label>
                <Form.Control
                  name="body"
                  as="textarea"
                  placeholder="Enter Content"
                  value={this.state.formBlogPost.body}
                  onChange={this.handleFormChange}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Button variant="primary" onClick={this.handleSubmit}>
                  Submit
                </Button>{" "}
                <Button variant="info" onClick={this.handleInfo}>
                  Update Status
                </Button>
              </Form.Group>
              <Form.Group>
                {this.state.post.map((post) => {
                  return (
                    <Post
                      key={post.id}
                      data={post}
                      remove={this.handleRemove}
                      update={this.handleUpdate}
                    />
                  );
                })}
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Fragment>
    );
  }
}

export default BlogPost;
