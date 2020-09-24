import React, { Component } from "react";
import axios from "axios";

class DetailPost extends Component {
  state = {
    post: {
      title: "",
      body: "",
    },
  };
  componentDidMount() {
    let id = this.props.match.params.postID;
    axios.get(`http://localhost:3004/posts/${id}`).then((res) => {
      console.log("Result ID:", res);
      let post = res.data;
      this.setState({
        post: {
          title: post.title,
          body: post.body,
        },
      });
    });
  }
  render() {
    // console.log(this.props);
    return (
      <div className="container">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{this.state.post.title}</h5>
            <p className="card-text">{this.state.post.body}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailPost;
