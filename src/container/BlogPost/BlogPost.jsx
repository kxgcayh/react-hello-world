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
    axios.get("http://localhost:3004/posts").then((result) => {
      this.setState({
        post: result.data,
      });
    });
  };

  handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      this.getPostAPI();
    });
  };

  handleFormChange = (event) => {
    let formBlogPostNew = { ...this.state.formBlogPost };
    console.log("Terjadi perubahan di: ", event.target.name);
    formBlogPostNew[event.target.name] = event.target.value;
    this.setState(
      {
        formBlogPost: formBlogPostNew,
      },
      () => {
        console.log("Value Obj formBlogPost ", this.state.formBlogPost);
      }
    );
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
                <Button variant="primary">Submit</Button>
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
