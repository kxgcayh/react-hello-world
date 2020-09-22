import React, { Component, Fragment } from "react";
import Post from "../../component/Post/Post";
import axios from "axios";

class BlogPost extends Component {
  state = {
    post: [],
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

  componentDidMount() {
    // Get API from Method
    this.getPostAPI();
  }

  render() {
    return (
      <Fragment>
        {this.state.post.map((post) => {
          return <Post key={post.id} data={post} remove={this.handleRemove} />;
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
