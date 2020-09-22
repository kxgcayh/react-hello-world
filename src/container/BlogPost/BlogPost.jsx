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

  handleFormChange = (event) => {
    let formBlogPostNew = { ...this.state.formBlogPost };
    // console.log("Terjadi perubahan di: ", event.target.name);
    let timeStamp = new Date().getTime();
    // console.log(timeStamp);
    formBlogPostNew["id"] = timeStamp;
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
    // console.log(this.state.formBlogPost);
    this.postDataToAPI();
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
                  onChange={this.handleFormChange}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Blog Content</Form.Label>
                <Form.Control
                  name="body"
                  as="textarea"
                  placeholder="Enter Content"
                  onChange={this.handleFormChange}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Button variant="primary" onClick={this.handleSubmit}>
                  Submit
                </Button>
              </Form.Group>
              <Form.Group>
                {this.state.post.map((post) => {
                  return (
                    <Post
                      key={post.id}
                      data={post}
                      remove={this.handleRemove}
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
