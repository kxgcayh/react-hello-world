import React, { Component, Fragment } from "react";
import Post from "../../component/Post/Post";
import axios from "axios";

class BlogPost extends Component {
  state = {
    post: [],
  };

  componentDidMount() {
    // Pemanggilan API menggunakan fetch
    /* fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          post: json,
        });
      }); */
    // Pemanggilan API menggunakan axios
    axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
      this.setState({
        post: result.data,
      });
    });
  }

  render() {
    return (
      <Fragment>
        {this.state.post.map((post) => {
          return <Post key={post.id} title={post.title} desc={post.body} />;
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
